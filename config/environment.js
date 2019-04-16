'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'input-lighthouse-fastboot',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    fastboot: {
      hostWhitelist: [/localhost:\d+/],
    },

    sentry: {
      dsn: 'https://67b63f7334124120b24912d4fe739247@app.getsentry.com/1438738',
      development: true,
      debug: true
    },

    'place-autocomplete': {
      key: process.env.AUTOCOMPLETE_API_KEY || ''
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.sentry.development = false;
    ENV.sentry.debug = false;
    ENV.fastboot = {
      hostWhitelist: [/herokuapp.com/],
    }
  }

  return ENV;
};
