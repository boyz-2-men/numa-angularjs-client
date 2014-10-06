'use strict';

// Development
var serverDomain = 'http://localhost:3000';

// Production
// var serverDomain = 'https://numarestfulapi-30069.onmodulus.net';
// var serverDomain = 'https://numa.mod.bz';

var apiVersion   = '/api/v1';

/**
 * @ngdoc service
 * @name numaApp.endpointConstants
 * @description
 * # endpointConstants
 * Constant in the numaApp.
 */
angular.module('numaApp')
  .constant('endpointConstants', {

    // GET
    allUsers        : serverDomain + apiVersion + '/user',

    // GET, DELETE, PUT
    user            : serverDomain + apiVersion + '/user/:id',

    // POST
    userAvatar      : serverDomain + apiVersion + '/user/:id/avatar',

    // POST
    userPoem        : serverDomain + apiVersion + '/user/:id/poem',

    // POST
    userPoemComment : serverDomain + apiVersion + '/user/:userId/poem/:poemId/comment',

    // GET, POST
    userPoemVote    : serverDomain + apiVersion + '/user/:userId/poem/:poemId/vote',

    // POST
    userSignup      : serverDomain + apiVersion + '/signup',

    // POST
    userLogin       : serverDomain + apiVersion + '/login',

    // POST
    forgotPassword  : serverDomain + apiVersion + '/forgot',

    // GET, POST
    resetPassword   : serverDomain + apiVersion + '/reset/:token',

    // GET, PUT
    poem            : serverDomain + apiVersion + '/poem/:id',

    // GET
    poemPage        : serverDomain + apiVersion + '/poem/page/:number'

  });
