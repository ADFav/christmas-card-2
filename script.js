angular.module('snowflakes', [])
  .controller('ngSnow', ['$scope', '$interval', function($scope,$interval) {
    $scope.flakes = [];
    var snowflake = function() {
      this.move = true;
      this.transitionT = 1 + 3 * Math.random();
      this.init  = {left : parseInt(100 * Math.random(),10) + "%", top : "-10%",  transition : "0s"};
      this.final = {left : parseInt(100 * Math.random(),10) + "%", top : "110%", transition : this.transitionT + "s linear"};
    };
    for (var i = 0; i < 25; i++) {
      var sflake = new snowflake();
      $scope.flakes.push(sflake);
    }
    $scope.finish = function(flake) {
      flake.final.left = parseInt(100 * Math.random(),10) + "%";
      flake.move = true;
      $scope.flakes.push(flake);
    };

     var move = function(flake) {
      flake.move = false;
      flake.init.left = parseInt(100 * Math.random(),10) + "%";
      setTimeout(function() {
        $scope.finish(flake);
      }, 1000 * flake.transitionT);
    };

    $interval(function() {
     move($scope.flakes[Math.floor(Math.random() * $scope.flakes.length)]);
    }, 250);
    
    var xmas = new Date(2016,11,25,6,0,0,0);
    var now  = new Date();
    $scope.message = (now < xmas) ? "No Peeking".split("\n") : "Dear Phil,\n\nMerry Christmas! \nMake sure you open the other gift first\n\nLove,\nAndrew & Ellen".split("\n");
    $scope.link = (now < xmas) ? {message: "", src: ""} : {message: "P.S. - here's a bonus gift", src: "https://docs.google.com/document/d/1ZMk2Sfqh8tit6haGT3eufZATbIyM0-GT31SM751tgCw/edit?usp=sharing"};
    $scope.snowCover = false;
    $scope.day = new Date().getHours() > 6 && new Date().getHours() < 17;
    
    $interval(function(){
      $scope.day = new Date().getHours() > 6 && new Date().getHours() < 17;
    },60*1000);
    
    setTimeout(function(){
      $scope.snowCover = true;
     }, 60*1000);
  }]);