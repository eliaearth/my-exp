(function(){
    var myApp = angular.module('myApp',[]);
    myApp.controller('controllerParent', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.a = 'a-controllerParent';
        this.b = 'b-controllerParent';
        $scope.c = this.b;
        $scope.d = $rootScope.d;
    }]);
    myApp.controller('controller1', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.a = 'a-controller1';
        this.b = 'b-controller1';
        $scope.c = this.b;
        $rootScope.d = 'd-controller1';
    }]);
     myApp.controller('controller2', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.a = 'a-controller2';
         this.b = 'b-controller2';
        $scope.c = this.b;
        $scope.d = $rootScope.d;
    }]);
}())