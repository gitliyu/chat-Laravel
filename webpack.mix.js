let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
var webpackConfig = {
  output: {
    publicPath: '/',                              
    chunkFilename: 'assets/[name].[chunkhash].js' 
  },
  resolve: {
    alias: {
      'resources': path.resolve(__dirname, 'resources'),
      'Modules': path.resolve(__dirname, 'Modules'),
    }
  }
}

mix.webpackConfig(webpackConfig)
mix.options({
  extractVueStyles: true, // Extract .vue component styling to file, rather than inline.
})

mix.js('resources/assets/js/main.js', 'public/js')
   .extract(['vue', "vuex", "element-ui","vue-router", "axios"])
   .sass('resources/assets/sass/app.scss', 'public/css');
