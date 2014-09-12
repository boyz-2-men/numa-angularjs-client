'use strict';

/**
 * @ngdoc function
 * @name warriorPoetsApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the warriorPoetsApp
 */
angular.module('warriorPoetsApp')
  .controller('LogoutCtrl', ['$auth', '$alert', 'storageFactory', 'userFactory',
    '$rootScope',
    function ($auth, $alert, storageFactory, userFactory, $rootScope) {

      $auth.logout()
        .then(function() {
          $alert({
            type        : 'material',
            title       : 'You have been logged out!',
            content     : 'Now fuck off, mate.',
            duration    : 4,
            dismissable : false
          });
          storageFactory.deleteId();
          storageFactory.deleteToken();
          userFactory.deleteInfo();
          $rootScope.$emit('logout');
        });

    }
  ]);