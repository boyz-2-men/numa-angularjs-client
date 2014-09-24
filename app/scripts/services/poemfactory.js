'use strict';

/**
 * @ngdoc service
 * @name numaApp.poemFactory
 * @description
 * # poemFactory
 * Factory in the numaApp.
 */
angular.module('numaApp')
  .factory('poemFactory', ['$resource', 'endpointConstants',
    function ($resource, endpointConstants) {

      var poemFactory = {};

// $resource calls -------------------------------------------------------------

      poemFactory.rGetAll = function() {
        return $resource(endpointConstants.allPoems).query();
      };

      poemFactory.rGet = function(id) {
        return $resource(endpointConstants.poem, {
          id : id
        }).get();
      };

      return poemFactory;

    }
  ]);
