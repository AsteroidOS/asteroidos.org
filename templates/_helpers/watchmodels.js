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

  /**
   * Create stars string from passed value
   *
   * @param   {Number}  stars    Number of stars
   * @param   {Number}  maxstars Maximum number of stars
   * @return  {String}           Stars string
   */

  Handlebars.registerHelper('starString', function(stars, maxstars) {
      stars = parseInt(stars);
      maxstars = parseInt(maxstars);
      if (stars < 0 || maxstars < 0 || maxstars > 10 || stars > maxstars) {
          return "";
      }
      var ret='<span class="star-good">';
      for (let i = 0; i < stars; i++) {
          ret += '<i class="icon ion-md-star"></i>';
      }
      ret += '</span><span class="star-bad">';
      for (let i = stars; i < maxstars; i++) {
          ret += '<i class="icon ion-md-star"></i>';
      }
      ret += '</span>';
      return ret;
      
  });

};
