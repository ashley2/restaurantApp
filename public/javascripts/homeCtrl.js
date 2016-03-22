angular.module('resApp')
.controller('homeCtrl', function($scope, ResService, $stateParams){


  $(document).ready(function(){
    $('.modal-trigger').leanModal();
  });

$scope.reservations = [];

  
  ResService.getAll()
  .then(function(res){

    var reservations = res.data;
    $scope.reservations = reservations;


  }, function(err){
    console.error(err);
  });


  $scope.addReserv = function(reserv){

    ResService.create($scope.reserv)
    .then(function(res){
      $scope.reservations.push(res.data)
      $scope.reserv = {}

    }, function(err){
      console.log(err)
    }); 
  };


})
  

