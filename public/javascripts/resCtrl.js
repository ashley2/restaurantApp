var app = angular.module('resApp');

app.controller('resCtrl', function($scope, ResService){


  $(document).ready(function(){
    $('.modal-trigger').leanModal();
  });


  
  // ResService.getAll()
  // .then(function(res){

  //   var reservations = res.data;
  //   $scope.reservations = reservations;


  // }, function(err){
  //   console.error(err);
  // });


  $scope.addReserv = function(){

    ResService.create($scope.reserv)
    .then(function(res){
      $scope.reservations.push(res.data)
      $scope.reserv = {}

    }, function(err){
      console.log(err)
    }); 
  };

  // $scope.viewReservation = null;

//   $scope.seeMore = function(dest){
//     console.log(dest);
//     $scope.viewReservation = dest;
//   }

//   $scope.seeLess = function(){
//     $scope.viewDest = null;
//   }

//   $scope.update = function(viewDest){
//     DestService.update(viewDest)
//     .then(function(){
//       swal("Great!", "Your dest has been saved!", "success")
//     }, function(err){
//       console.log(err);
//     })
//   }

//   $scope.deleteDest = function(dest){
//     swal({   title: "Are you sure?",   
//       text: "You will not be able to recover this reservations info!",
//       type: "warning",
//       showCancelButton: true, 
//       confirmButtonColor: "#DD6B55", 
//       confirmButtonText: "Yes, delete it!",
//       closeOnConfirm: false },
//       function(){   
//         DestService.delete(dest)
//         .then(function(){
//           var index = $scope.reservations.indexOf(dest);
//           $scope.reservations.splice(index, 1);
//           $scope.viewDest = null;
//           swal("Deleted!",
//            "Your dest has been deleted.",
//            "success"); 
//         })
//       }, function(err){
//         console.log('err ' , err);
//       })
//   }

})

