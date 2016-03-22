'use strict';

var app = angular.module('resApp');

app.service('ResService', function($http){

  this.getAll = function(){
    return $http.get('/reservations')
  };

  this.create = function(newReservation){
    return $http.post('/reservations', newReservation);
  }

//   this.delete = function(reservation) {
//    return $http.delete(`/reservations/${reservation._id}`)


//  };

//  this.update = function(editReservation){
//     return $http.put('/reservations', editReservation);
// };
})


