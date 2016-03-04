(function(){
  var app = angular.module("c.components.crossCorrelation");
  app.controller("c.components.crossCorrelation.Controller", [ "$scope", "c.data.CrossCorrelation",
    function($scope, CC){
      function loadCorrelation(){
        CC.fetchComputedCorrelation($scope.computed).then(function(c){
          $scope.data = c.pattern;
        });
      };

      $scope.$watch("computed", function(nv){
        if(nv){
          loadCorrelation();
        };
      });
    }
  ]);
}());
