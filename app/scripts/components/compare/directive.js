(function(){
  var app = angular.module("c.components.compare");
  app.directive("cTypeCompare", [function(){
    return{
      scope: {
        d1: "=",
        d1Text: "=",
        d2: "=",
        d2Text: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/compare/template.html",
      controller: "c.components.compare.Controller",
    };
  }]);

}());
