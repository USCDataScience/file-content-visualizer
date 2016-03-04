(function(){
  var app = angular.module("c.components.size");
  app.controller("c.components.size.Controller", [ "$scope", "c.data.Size", "$uibModal",
    function($scope, Size, $uibModal){
      function defineScope(){

        Size.cluster().$promise.then(function(r){
          $scope.clusteredSizes = r.data;
        })

        Size.summary().$promise.then(function(r){
          $scope.clusterSummary = r.data;

          $scope.config = {
            itemsPerPage: $scope.clusterSummary.length,
          };
        })
      };

      $scope.isClusterable = function(type){
        return $scope.clusteredSizes[type] != null;
      };

      $scope.openChart = function(type){
        $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/scripts/components/size/size_chart.html',
          controller: 'c.util.controllers.modal.Controller',
          size: 'md',
          resolve: {
            data: function(){
              return {
                key: type,
                value: $scope.clusteredSizes[type],
              };
            }
          }
        });
      };

      defineScope();
    }
  ]);
}());
