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

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('react-material-ui.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poetic:react-material-ui');
  api.addFiles('react-material-ui-tests.js');
});
