(function(){
  var app = angular.module("c.components.signature");
  app.controller("c.components.signature.Controller", [ "$scope", "c.data.Signature", "$q",
    function($scope, Signature, $q){
      function defineScope(){
        $scope.options = {
          "chart": {
            "type": "lineWithFocusChart",
            "height": 600,
            "margin": {
              "top": 20,
              "right": 20,
              "bottom": 60,
              "left": 40
            },
            "duration": 500,
            "useInteractiveGuideline": true,
            "xAxis": {
              "axisLabel": "Byte Value"
            },
            "yAxis": {
              "axisLabel": "Frequency",
              "rotateYLabel": false
            },
          }
        };
      };


      function loadSignatures(){
        var promises = _.map($scope.types, function(t){
          return new Signature.fetchSignature(t);
        });

        $q.all(promises).then(function(data){
          var computed = _.filter($scope.data, function(d){
            return d.$computed
          });

          $scope.data = _.map(data, function(d){
            return {
              key: d.type,
              values: _.map(d.pattern, function(s, index){
                return { series: d.type, x:index , y:s }
              }),
            };
          });

          if(computed){
            $scope.data = $scope.data.concat(computed);
          };
        });

      };

      function loadComputedSignature(c){
        new Signature.fetchComputedSignature(c).then(function(d){
          if(!$scope.data){ $scope.data = [ ] };

          $scope.data.push({
            key: d.fileName,
            $computed: true,
            values: _.map(d.pattern, function(s, index){
              return { series: d.type, x:index , y:s }
            })
          })

        })
      };

      defineScope();

      // Define watchers
      $scope.$watch("types", function(nv, ov){
        loadSignatures();
      });

      $scope.$watch("computed", function(nv, ov){
        if(nv){
          _.each(nv.split(":"), loadComputedSignature);
        }
      });
    }
  ]);
}());
