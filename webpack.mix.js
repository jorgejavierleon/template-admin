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

mix.styles([
    'public/css/bootstrap.css',
    'public/fonts/icomoon.css',
    'public/fonts/flag-icon-css/css/flag-icon.min.css',
    'public/vendors/css/extensions/pace.css',
    'public/css/bootstrap-extended.css',
    'public/css/app-robust.css',
    'public/css/colors.css',
    'public/css/core/menu/menu-types/vertical-menu.css',
    'public/css/core/menu/menu-types/vertical-overlay-menu.css',
    'public/css/core/colors/palette-gradient.css',
    'public/css/style.css',
    ], 'public/css/all.css').options({
        processCssUrls: false
    });

mix.styles([
    'public/css/bootstrap.css',
    'public/fonts/icomoon.css',
    'public/fonts/flag-icon-css/css/flag-icon.min.css',
    'public/vendors/css/extensions/pace.css',
    'public/css/bootstrap-extended.css',
    'public/css/app-robust.css',
    'public/css/colors.css',
    'public/css/core/menu/menu-types/vertical-menu.css',
    'public/css/core/menu/menu-types/vertical-overlay-menu.css',
    'public/css/core/colors/palette-gradient.css',
    'public/css/pages/login-register.css',
    'public/css/style.css',
    ], 'public/css/all-login.css').options({
        processCssUrls: false
    });

mix.scripts([
    'public/js/core/libraries/jquery.min.js',
    'public/vendors/js/ui/tether.min.js',
    'public/js/core/libraries/bootstrap.min.js',
    'public/vendors/js/ui/perfect-scrollbar.jquery.min.js',
    'public/vendors/js/ui/unison.min.js',
    'public/vendors/js/ui/blockUI.min.js',
    'public/vendors/js/ui/jquery.matchHeight-min.js',
    'public/vendors/js/ui/screenfull.min.js',
    'public/vendors/js/extensions/pace.min.js',
    'public/js/core/app-menu.js',
    'public/js/core/app.js',
], 'public/js/all.js');

