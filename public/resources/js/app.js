(function(){

  var app = angular.module('installit',['ngRoute']);

  app.config(['$routeProvider',function($routeProvider){

    $routeProvider
      .when('/',{
          templateUrl:'views/main.html',
          controller:'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);


}());
