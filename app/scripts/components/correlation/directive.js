(function(){
  var app = angular.module("c.components.correlation");
  app.directive("cCorrelation", [function(){
    return{
      scope: {
        computed: "=",
        types: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/correlation/template.html",
      controller: "c.components.correlation.Controller",
    };
  }]);

}());
