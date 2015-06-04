var myExpApp = angular.module('myExpApp', ['ngRoute']);
myExpApp.config(function($routeProvider){
    $routeProvider.
    when('/part1', {
        templateUrl: 'part1.html'
    }).
    when('/part2', {
        templateUrl: 'part2.html'
    }).
    when('/part2/:param_part2', {
        templateUrl: 'part2.html',
        controller: 'part2Controller'
    });
});

myExpApp.controller('part2Controller', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.param = $routeParams.param_part2 || 1;
}]);