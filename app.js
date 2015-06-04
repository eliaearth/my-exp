var myExpApp = angular.module('myExpApp', ['ngRoute']);
myExpApp.config(function($routeProvider){
    $routeProvider.
    when('/part1', {
        templateUrl: 'part1.html'
    }).
    when('/part2', {
        templateUrl: 'part2.html'
    });
});