(function(){
  var app = angular.module("c.components.compare");
  app.controller("c.components.compare.Controller", [ "$scope", "c.data.Format", function($scope, Format){
    function defineScope(){
      $scope.options = {
        chart: {
          type: 'pieChart',
          height: 1200,
          x: function(d){return d.key; },
          y: function(d){return d.value; },
          showLabels: false,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      $scope.text = {
        before: "Given Polar Trec Classification",
        now: "Computed Classification (Tika 1.11)",
        inter: "Application Octet (Tika 1.12)",
        after: "Application Octet (Tika 1.13 + Custom MimeTypes)",
      }

      $scope.ds1 = Format.getData($scope.d1);
      $scope.ds2 = Format.getData($scope.d2);

      $scope.diff = Format.getDiff($scope.d1, $scope.d2);

      $scope.s1 = Format.getSum($scope.d1);
      $scope.s2 = Format.getSum($scope.d2);

      $scope.config = {
        itemsPerPage: _.max($scope.d1.length, $scope.d2.length),
      };
    };

    defineScope();
  }]);
}());
