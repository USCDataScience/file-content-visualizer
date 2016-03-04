(function(){
  var app = angular.module("c.components.fht");
  app.directive("cFht", [function(){
    return{
      scope: {
        types: "=",
        computed: "=",
        offset: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/fht/template.html",
      controller: "c.components.fht.Controller",
      link: function($scope, elem, attrs){


      }
    };
  }]);

}());
