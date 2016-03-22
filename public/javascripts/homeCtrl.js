angular.module('resApp')
.controller('homeCtrl', function($scope, ResService, $stateParams){


  $(document).ready(function(){
    $('.modal-trigger').leanModal();
  });

$scope.reservations = [];

  
 // $scope.today = new Date().getDay()
 // console.log($scope.today);


// get upcoming to page
// ResService.getUpcoming()
//   .then(function(res){
//     console.log('res', res);
//   }, function(err){
//     console.error('err', err)
//   })

  ResService.getAll()
  .then(function(res){

    var reservations = res.data;
    $scope.reservations = reservations;


  }, function(err){
    console.error(err);
  });

  $scope.toggleChecked = (reserv) =>{
   ResService.update(reserv)
   .then(function(){
     swal("Great!", "Your reservation has been saved!", "success")
   }, function(err){
     console.log(err);
   })
 }


  $scope.addReserv = (reserv) => {

    ResService.create($scope.reserv)
    .then(function(res){
      $scope.reservations.push(res.data)
      $scope.reserv = {}

    }, function(err){
      console.log(err)
    }); 
  };


})
  

