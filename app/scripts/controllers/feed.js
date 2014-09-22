'use strict';

/**
 * @ngdoc function
 * @name numaApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the numaApp
 */
angular.module('numaApp')
  .controller('FeedCtrl', ['$scope', 'poemFactory', 'storageFactory',
    'userFactory', 'ngTableParams',
    function ($scope, poemFactory, storageFactory, userFactory, ngTableParams) {

      $scope.poems = [];
      var id = storageFactory.getId();
      userFactory.init(id, 'Basic');

      var resource = poemFactory.rGetAll();

      resource.$promise.then(function(res) {
        $scope.poems = res;
      }, function(res) {
        console.log(res);
      });


    }
  ]);
