var myExpApp = angular.module('myExpApp', ['ui.router']);
myExpApp.config(function($stateProvider){
    $stateProvider.
     state('home', {
        url: '',
        templateUrl: 'part1.html',
    }).
    state('part1State', {
        url: '',
        templateUrl: 'part1.html',
    }).
    state('part2State', {
        url: 'part2/:param', 
        templateUrl: 'part2.html',
        controller: 'part2Controller'
//        function($scope, $stateParams) {
//            $scope.name = $stateParams.item;
//        }
    });
}).run();
myExpApp.controller('mainController', ['$scope', '$routeScope', '$state', function($scope, $routeScope, $state) {
                                    
    $routeScope.$state = $state;
    $scope.name = 'Main';
    
}]);
myExpApp.controller('part1Controller',['$scope', function($scope){
    $scope.name = 'part1'
}]);
myExpApp.controller('part2Controller',['$scope', '$stateParams', function($scope, $stateParams){
    $scope.name = $stateParams.param;
    
}]);
myExpApp.directive('part1', function(){
    return {
        controller: 'part1Controller',
        templateUrl: 'part1.html'
        
    }
});
myExpApp.directive('part2', function(){
    return {
        controller: 'part2Controller',
        templateUrl: 'part2.html'
        
    }
});