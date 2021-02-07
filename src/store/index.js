import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        userObj: {},
        reposArray: [],
        langArray: []
    },
    mutations: {
        setUserObj ( state, payload ) {
            state.userObj = payload.userObj
        },
        setUserRepos ( state, payload ) {
            state.reposArray = payload.reposArray
        },
        setLangArray ( state, payload ) {
            state.langArray = payload.langArray
        },
    },
    actions: {
        // 指定ユーザーの情報取得
        async initUserObj ( context ) {
            const fetchURL = 'https://api.github.com/users/shushutona';

            await fetch( fetchURL )
                .then( ( response ) => {
                    return response.json();
                } )
                .then( ( userObj ) => {
                    context.commit( 'setUserObj', { userObj } );
                } );

            await Promise.resolve( context.dispatch( 'getUserRepos' ) );
            await Promise.resolve( context.dispatch( 'getLangArray' ) );
        },

        // リポジトリ一覧取得（repos_url）
        async getUserRepos ( context ) {
            const fetchURL = context.state.userObj[ 'repos_url' ];

            await fetch( fetchURL )
                .then( ( response ) => {
                    return response.json();
                } )
                .then( ( reposArray ) => {
                    context.commit( 'setUserRepos', { reposArray } );
                } );
        },

        // 指定リポジトリで使用されている言語一覧
        async getLangArray ( context ) {
            const langArray = [];

            for ( let repoObj of context.state.reposArray ) {
                const fetchURL = repoObj[ 'languages_url' ];

                await fetch( fetchURL )
                    .then( ( response ) => {
                        return response.json();
                    } )
                    .then( ( data ) => {
                        langArray.push( data );
                    } );
            }

            context.commit( 'setLangArray', { langArray } );
        },
    },
    modules: {
    }
} );
