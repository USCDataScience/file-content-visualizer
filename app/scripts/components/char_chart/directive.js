(function(){
  var app = angular.module("c.components.charChart");
  app.directive("cCharChart", [function(){
    return{
      scope: {},
      replace: true,
      templateUrl: "app/scripts/components/char_chart/template.html",
      link: function($scope){
        $scope.fromCharCode = String.fromCharCode;
        $scope.byteSet = _.range(256);
      }
    };
  }]);

}());
