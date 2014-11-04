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
    'userFactory', 'helperFactory', 'socket', '$rootScope', '$cookieStore',
    '$location', '$resource',
    function ($scope, poemFactory, storageFactory, userFactory,
      helperFactory, socket, $rootScope, $cookieStore, $location, $resource) {

      var id = storageFactory.getId();
      userFactory.init(id, 'Basic');

      $scope.poems             = [];
      $scope.totalPoems        = 0;
      $scope.poemsPerPage      = 15; // this should match however many results your API puts on one page
      $scope.searchByTitle     = false;
      $scope.searchByTag       = false;
      $scope.searchByContent   = false;
      $scope.strictSearch      = false;
      $scope.currentPage       = parseInt($location.search().page) || 1;
      $scope.queryParam        = $location.search().query;
      $scope.searchbyParam     = $location.search().searchby;
      $scope.strictSearchParam = $location.search().strict;

      // Call this on page load
      getPoemsPage($scope.currentPage, $scope.queryParam, $scope.searchbyParam, $scope.strictSearchParam);

      $scope.pagination = {
        current: 1
      };

// functions -------------------------------------------------------------------

      $scope.timeSince = helperFactory.timeSince;

      $scope.searchPoems = function() {
        if (typeof $scope.query !== 'undefined') {
          $location.search('query', $scope.query);
        } else {
          $location.search('query', null);
        }

        if ($scope.strictSearch === true) {
          $location.search('strict', 'true');
        } else {
          $location.search('strict', null);
        }

        if ($scope.searchByTag === true && $scope.searchByTitle === false && $scope.searchByContent === false) {
          $location.search('searchby', 'tag').search('strict', null);
        } else if ($scope.searchByTag === false && $scope.searchByTitle === true && $scope.searchByContent === false) {
          $location.search('searchby', 'title').search('strict', null);
        } else if ($scope.searchByTag === false && $scope.searchByTitle === false && $scope.searchByContent === true) {
          $location.search('searchby', 'content').search('strict', null);
        } else if ($scope.searchByTag === true && $scope.searchByTitle === true && $scope.searchByContent === false) {
          $location.search('searchby', 'tag,title');
        } else if ($scope.searchByTag === true && $scope.searchByTitle === true && $scope.searchByContent === true) {
          $location.search('searchby', 'tag,title,content');
        } else if ($scope.searchByTag === false && $scope.searchByTitle === true && $scope.searchByContent === true) {
          $location.search('searchby', 'title,content');
        } else if ($scope.searchByTag === false && $scope.searchByTitle === false && $scope.searchByContent === false) {
          $location.search('searchby', null);
        }

        $scope.queryParam        = $location.search().query;
        $scope.searchbyParam     = $location.search().searchby;
        $scope.strictSearchParam = $location.search().strict;

        getPoemsPage($scope.currentPage, $scope.queryParam, $scope.searchbyParam, $scope.strictSearchParam);
      };

      function getPoemsPage(page, query, searchby, strictSearch) {
        var resource = poemFactory.rGetQuery(page, query, searchby, strictSearch);

        resource.$promise.then(function(res) {
          $scope.currentPage = page;
          $location.search('page', $scope.currentPage);
          $scope.poems       = res.poems;
          $scope.totalPoems  = res.poemCount;
          $scope.pageCount   = res.pageCount;
        }, function(res) {
          console.log(res);
        });
      };

      $scope.nextPage = function() {
        getPoemsPage(parseInt($scope.currentPage) + 1, $scope.queryParam,
          $scope.searchbyParam, $scope.strictSearchParam);
      };

      $scope.previousPage = function() {
        getPoemsPage(parseInt($scope.currentPage) - 1, $scope.queryParam,
          $scope.searchbyParam, $scope.strictSearchParam);
      };

      $scope.pageChanged = function(newPageNumber) {
        getPoemsPage(newPageNumber);
      };

      // function aContainsB (a, b) {
      //   if (typeof a === 'string') {
      //     return a.toLocaleLowerCase().indexOf(b) >= 0;
      //   } else if (a instanceof Array) {
      //     for (var i = a.length - 1; i >= 0; i--) {
      //       if (a[i].toLocaleLowerCase().indexOf(b) >= 0) {
      //         return true;
      //       }
      //     }
      //   }
      // }

      // $scope.poemSearch = function(poem) {
      //   if ($scope.searchByTitle === true && $scope.searchByTag === true)
      //   {
      //     return aContainsB(poem.title, $scope.query) || aContainsB(poem.tags, $scope.query);
      //   }
      //   else if ($scope.searchByTitle === true && $scope.searchByTag !== true)
      //   {
      //     return aContainsB(poem.title, $scope.query);
      //   }
      //   else if ($scope.searchByTitle !== true && $scope.searchByTag === true)
      //   {
      //     return aContainsB(poem.tags, $scope.query);
      //   }
      //   else if ($scope.searchByTitle !== true && $scope.searchByTag !== true)
      //   {
      //     if ($scope.query)
      //     {
      //       return aContainsB(poem.title, $scope.query) || aContainsB(poem.tags, $scope.query);
      //     }
      //     else
      //     {
      //       return poem;
      //     }
      //   }
      //   else
      //   {
      //     return poem;
      //   }
      // };

    }
  ]);
