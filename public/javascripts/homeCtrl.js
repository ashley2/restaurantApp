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



  $scope.viewRes = null;

  $scope.editRes = function(reserv){
    console.log(reserv);
    $scope.viewRes = reserv;
  }

  $scope.saveEdit = function(){
    $scope.viewRes = null;
  }

  $scope.update = function(viewRes){
    DestService.update(viewRes)
    .then(function(){
      swal("Great!", "Your dest has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }

  $scope.deleteRes = function(reserv){
    console.log('delete')
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this reservations info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        ResService.delete(reserv)
        .then(function(){
          var index = $scope.reservations.indexOf(reserv);
          $scope.reservations.splice(index, 1);
          $scope.viewRes = null;
          swal("Deleted!",
           "Your dest has been deleted.",
           "success"); 
        })
      }, function(err){
        console.log('err ' , err);
      })
  }

})

