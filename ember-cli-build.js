'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['AUTOCOMPLETE_API_KEY'],
      fastbootAllowedKeys: ['AUTOCOMPLETE_API_KEY']
    }
  });

  return app.toTree();
};
