import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        githubName: 'shushutona', // readonly
        userObj: {},
        reposArray: [],
        reposUrlNameObj: {},
        commitLinkArray: []
    },
    mutations: {
        setUserObj ( state, payload ) {
            state.userObj = payload.userObj
        },
        setUserRepos ( state, payload ) {
            state.reposArray = payload.reposArray
        },
        setReposUrlNameObj ( state, payload ) {
            state.reposUrlNameObj = payload.reposUrlNameObj
        },
        setCommitLinkArray ( state, payload ) {
            state.commitLinkArray = payload.commitLinkArray
        },
    },
    actions: {
        // 指定ユーザーの情報取得
        async initUserObj ( context ) {
            const fetchURL = `https://api.github.com/users/${ context.state.githubName }`;
            const response = await fetch( fetchURL );
            const userObj = await response.json();

            context.commit( 'setUserObj', { userObj } );

            await context.dispatch( 'getUserRepos' );
            await context.dispatch( 'getCommitLinkArray' );
        },

        // リポジトリ一覧取得（repos_url）&リポジトリ名：URLのオブジェクトを生成
        async getUserRepos ( context ) {
            const fetchURL = context.state.userObj[ 'repos_url' ];
            const response = await fetch( fetchURL );
            const reposArray = await response.json();

            const reposUrlNameObj = {};
            reposArray.forEach(( reposObj ) => {
                reposUrlNameObj[ reposObj.name ] = reposObj.html_url;
            } );

            context.commit( 'setReposUrlNameObj', { reposUrlNameObj } );
            context.commit( 'setUserRepos', { reposArray } );
        },

        async getCommitLinkArray ( context ) {
            const fetchURL = context.state.userObj[ 'events_url' ].replace( '{/privacy}', '' );
            const response = await fetch( fetchURL );
            const responceCommitArray = await response.json();

            const currentCommitArray = [];
            const loopLimit = responceCommitArray.length;

            for ( let i = 0; i < loopLimit; i++ ) {
                const commitObj = responceCommitArray[ i ];

                if ( commitObj.type === 'PushEvent') {
                    currentCommitArray.push( commitObj );
                }

                if ( currentCommitArray.length === 5 ) {
                    break;
                }
            }

            const commitLinkArray = currentCommitArray.map( ( commitObj, index ) => {
                const date = new Date( commitObj.created_at );
                const dateMonth = `${date.getMonth() + 1}`.padStart( 2, 0 );
                const dateDate = `${ date.getDate() }`.padStart( 2, 0 );
                const dateHours = `${ date.getHours()}`.padStart( 2, 0 );
                const dateMinutes = `${ date.getMinutes() }`.padStart( 2, 0 );

                const reposUrl = context.state.reposUrlNameObj[ commitObj.repo.name.replace( 'shushuTona/', '' ) ];

                return {
                    id: index,
                    subLinkText: `${ date.getFullYear() }/${ dateMonth }/${ dateDate } : ${ dateHours }:${ dateMinutes }`,
                    mainLinkText: commitObj.payload.commits[ 0 ].message,
                    linkHref: reposUrl
                }
            } );

            context.commit( 'setCommitLinkArray', { commitLinkArray } );
        }
    }
} );
