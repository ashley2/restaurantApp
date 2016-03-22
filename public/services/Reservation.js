'use strict';

var app = angular.module('resApp');

app.service('ResService', function($http){




  this.getAll = function(){
    return $http.get('/reservations')
  };

  this.create = function(reserv){
    return $http.post('/reservations',reserv);
  }

  this.delete = function(reserv) {
   return $http.delete(`/reservations/${reserv._id}`)


 };

 this.update = function(editRes){
    return $http.put('/reservations', editRes);
};
})


