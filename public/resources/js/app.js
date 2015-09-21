(function(){

  var app = angular.module("installit",[]);

  app.config(['routeProvider',function($routeProvider){
    $routeProvider
      .when('/',function({
          templateUrl:'views/main.html'
          controller:'MainController'
      })
      .otherwhise(function(){
        redirectTo: '/'
      }
      );
  }]);

}());
