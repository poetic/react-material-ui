Package.describe({
  name: 'poetic:react-material-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'material-ui': '0.10.1',
  'react-tap-event-plugin': '0.1.7'
});

Package.onUse(function(api) {
  api.use([
    'react',
    'cosmos:browserify'
  ], 'client');

  api.addFiles([
    'react-material-ui.browserify.options.json',
    'react-material-ui.browserify.js'
  ], 'client');

  api.export(['mui', 'injectTapEventPlugin'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poetic:react-material-ui');
  api.addFiles('react-material-ui-tests.js');
});
