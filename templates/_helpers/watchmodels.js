'use strict';


let models = require("../../pages/features.json");

/**
 * Watch model helpers
 */

module.exports.register = function (Handlebars, options, params) {

  /**
   * Get Model from codename
   *
   * @param   {String}  codename    Codename model of watch
   * @return  {Object}              Model object
   */

  Handlebars.registerHelper('getModel', function(codename) {
   return models.watches.find((s) => s.name===codename);
  });
};
