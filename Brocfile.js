/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

/* picnic */
app.import('bower_components/picnic/releases/v2.min.css');

/* moment */
app.import('bower_components/moment/moment.js');

/* fontello */

app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
    destDir: 'font'
});
app.import('vendor/fontello/font/fontello.eot', {
    destDir: 'font'
});
app.import('vendor/fontello/font/fontello.svg', {
    destDir: 'font'
});
app.import('vendor/fontello/font/fontello.woff', {
    destDir: 'font'
});


module.exports = app.toTree();
