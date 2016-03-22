'use strict';

var app = angular.module('resApp');

app.service('ResService', function($http){




  // this.getAll = function(){
  //   return $http.get('/reservations')
  // };

  this.create = function(reserv){
    return $http.post('/reservations',reserv);
  }

//   this.delete = function(reservation) {
//    return $http.delete(`/reservations/${reservation._id}`)


//  };

//  this.update = function(editReservation){
//     return $http.put('/reservations', editReservation);
// };
})


