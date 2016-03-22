angular.module('resApp')
.controller('histCtrl', function($scope, ResService, $stateParams){

  $scope.reservations = [];

  
  ResService.getAll()
  .then(function(res){

    var reservations = res.data;
    $scope.reservations = reservations;


  }, function(err){
    console.error(err);
  });


  $scope.viewFull = null;


  $scope.viewRes = null;

  $scope.editRes = function(reserv){
    console.log(reserv);
    $scope.viewRes = reserv;
    $scope.viewRes.date = new Date($scope.viewRes.date)
  }

  $scope.saveEdit = function(){
    $scope.viewRes = null;
  }


  
  $scope.update = function(viewRes){
    ResService.update(viewRes)
    .then(function(){s
      swal("Great!", "Your reservation has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }

  $scope.toggleChecked = (viewRes) =>{
   ResService.update(viewRes)
   .then(function(){
     swal("Great!", "Your reservation has been saved!", "success")
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
           "Your reservations has been deleted.",
           "success"); 
        })
      }, function(err){
        console.log('err ' , err);
      })
  }

})

