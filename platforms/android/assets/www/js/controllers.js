angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaLocalNotification) {

})
.controller('PlaylistsCtrl', function($scope, $timeout) {
  //$scope.clock="00:00";
  
  var timeClock = function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var hours=h>9?h:"0"+h;
    var minutes=m>9?m:"0"+m;
    var clockString=hours + ":" + minutes;
    var clockBack=clockString.split("").reverse().join("")
    console.log(clockBack);
    if(clockString==clockBack){
      $scope.add = function() {
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: "This is a message",
            title: "This is a title",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
      };
    }
    $scope.clock=clockString;
    $timeout(timeClock, 500);
  }
  $timeout(timeClock, 500);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
