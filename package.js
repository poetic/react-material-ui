Package.describe({
  name: 'poetic:react-material-ui',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Everything you need to use material ui inside your Meteor application.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/react-material-ui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'material-ui': '0.12.3'
});

Package.onUse(function(api) {
  api.use([
    'react@0.1.13',
    'cosmos:browserify@0.8.1'
  ], 'client');

  api.addFiles([
    'react-material-ui.browserify.options.json',
    'react-material-ui.browserify.js'
  ], 'client');

  api.export(['mui', 'injectTapEventPlugin'], 'client');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.18.0');
  api.use([
    'jquery@1.11.4',
    'poetic:react-material-ui',
    'react@0.1.13',
    'session@1.1.1',
    'static-html@1.0.2',
  ], 'client');

  api.addFiles([
    'example/client/example.html',
    'example/client/example.jsx',
    'tests/client/react-material-ui-spec.js',
  ], 'client');

});
