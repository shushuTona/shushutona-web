const path = require( 'path' );
const PrerenderSPAPlugin = require( 'prerender-spa-plugin' );

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "./src/assets/sass/prepends.scss";`
            }
        }
    },
    configureWebpack: (config) => {
        if ( process.env.NODE_ENV === 'production' ) {
            return {
                plugins: [
                    new PrerenderSPAPlugin( {
                        staticDir: path.join( __dirname, 'dist' ),
                        routes: [
                            '/',
                            '/about',
                            '/product',
                            '/skill'
                        ]
                    } )
                ]
            }
        }
    }
};
