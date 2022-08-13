'use strict';


let models = require("../../pages/watches-support.json");

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
   * Get all Models with given status in descending
   * order of stars
   *
   * @param   {String}  status    Status of watch
   * @return  {Array}             Model object collection
   */

  Handlebars.registerHelper('getAllWithStatus', function(mystatus) {
   return models.watches.filter((s) => s.status===mystatus).sort((a, b) => parseInt(b.stars) - parseInt(a.stars));
  });

  /**
   * Get all Features sorted by decreasing count of the number of
   * watches mentioning that feature
   *
   * @return  {Array}            Sorted array of feature names
   */

  Handlebars.registerHelper('getAllFeatures', function() {
   // this complex-looking thing simply creates a Map of all feature names
   // and the number of time they are mentioned
   const fs = models.watches.map((w) => w.features.map(({name}) => name)).
     flat().
     reduce((m, item) => m.set(item, m.has(item) ? m.get(item) + 1 : 1), new Map());
   return [...fs].sort((a, b) => b[1] - a[1]).map((a) => a[0]);
  });

  /**
   * Get all Features sorted by decreasing count of the number of
   * watches mentioning that feature
   *
   * @param   {Object}  model       The watch model object
   * @param   {Array}   featurelist Master list of features
   * @return  {Array}               Array of feature statuses
   */

  Handlebars.registerHelper('getAugmentedFeatures', function(watch, featurelist) {
      var ret = [];
      for (var fl of featurelist) {
          var found = "na";
          for (var wf of watch.features) {
              if (wf.name===fl) {
                  found = wf.status;
              }
          }
          ret.push(found);
      }
      return ret;
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
