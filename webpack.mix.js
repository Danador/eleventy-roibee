const path = require('path');
const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

const arJsPage = [
    './src/js/app.js',
    './src/js/admin/index.js'
];

const arCssPage = [
    './src/css/style.css',
];

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ],
    },
    plugins: [
        new Dotenv()
    ]
});

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, '_site/dist/js');
});

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, '_site/dist/css/style.css')
});

mix.disableNotifications();