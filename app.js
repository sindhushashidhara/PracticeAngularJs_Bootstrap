var myapp = angular.module('myapp',['ngmessages', 'ngresource']);

myapp.controller('maincontroller', ['$scope' , '$log', '$timeout', function($scope) {
    
    console.log($scope);
    
    $scope.name = "Jane";
    $scope.occupation = "Coder";
    
    $scope.getname = function() {
        return "John";
    }
    
    $log.log("Hello");
    $log.info("This is the information");
    //debug, warn, error, log, info
    
    $scope.formattedname = $filter('uppercase')($scope.name);
    
    $log.info($scope.formattedname);
    
    $timeout(function(){
        $scope.name = "Everybody";
    }, 3000)
    
}]);


