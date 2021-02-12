const path = require( 'path' );
const PrerenderSPAPlugin = require( 'prerender-spa-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "./src/assets/sass/prepends.scss";`
            }
        }
    },
    configureWebpack: ( config ) => {
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

        config.optimization = {
            minimize: true,
            minimizer: [
                new TerserPlugin( {
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        parse: {},
                        compress: { drop_console: true },
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        output: { comments: false },
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: undefined,
                        keep_fnames: false,
                        safari10: false,
                    },
                } ),
            ],
        }
    }
};
