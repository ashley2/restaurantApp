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

 this.update = function(viewRes){
    return $http.put('/reservations', editRes);
};

 this.toggleCheckin = function(reservId) {
    return $http.put(`/reservations/${reservationId}/checkin`);
  };


})

// findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, reserv){
//   res.status(err ? 400 : 200).send(err || reservation)


