'use strict';

/**
 * dateformat helper
 */

module.exports.register = function (Handlebars, options, params) {
  Handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));
};
