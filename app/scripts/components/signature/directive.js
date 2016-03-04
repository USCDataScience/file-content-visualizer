(function(){
  var app = angular.module("c.components.signature");
  app.directive("cSignature", [function(){
    return{
      scope: {
        types: "=",
        computed: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/signature/template.html",
      controller: "c.components.signature.Controller",
    };
  }]);

}());
