  (function(){
  var app = angular.module("c.components.correlation");
  app.controller("c.components.correlation.Controller", [ "$scope", "c.data.Correlation", "$q",
    function($scope, Correlation, $q){
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


      function loadCorrelations(){
        var promises = _.map($scope.types, function(t){
          return new Correlation.fetchCorrelation(t);
        });

        $q.all(promises).then(function(data){
          var computed = _.filter($scope.data, function(d){
            return d.$computed
          });

          $scope.data = _.map(data, function(d){
            var dd = [d.baseSignature, d.comparedSignature, d.correlation];

            return _.map(dd, function(x){
              return {
                key: x.name + d.type,
                values: _.map(x.pattern, function(s, index){
                  return { series: x.type, x:index , y:s }
                }),
                $correlation: x.$correlation,
              }
            });
          });

          $scope.data = _.flatten($scope.data);

          if(computed){
            $scope.data = $scope.data.concat(computed);
          };
          findExermetires();
        });
      };

      function loadComputedCorrelation(){
        new Correlation.fetchComputedCorrelation($scope.computed).then(function(d){
          var data = [d.baseSignature, d.comparedSignature, d.correlation];

          $scope.data = _.map(data, function(e){
            return {
              key: e.name,
              $computed: true,
              $correlation: e.$correlation,
              values: _.map(e.pattern, function(s, index){
                return { series: e.type, x:index , y:s }
              })
            };
          });
          findExermetires();
        });
      };

      function findExermetires(){
        var corrs =  _.chain($scope.data)
                      .filter(function(d){
                        return d.$correlation
                      })
                      .map(function(d){
                        values = _.chain(d.values)
                         .map(function(x,i){ return { index: i, value: x.y  } })
                         .sortBy(function(x){ return -x.value; })
                         .value();

                        return {
                          name: d.key,
                          max: [ values[0].index, values[1].index, values[2].index, values[3].index, values[4].index ],
                          min: [ values[255].index, values[254].index, values[253].index, values[252].index, values[251].index ],
                        }
                      })
                      .value();

        $scope.exterems = corrs;
      }

      defineScope();

      $scope.$watch("computed", function(nv, ov){
        if(nv){
          loadComputedCorrelation();
        }
      });

      $scope.$watch("types", function(nv, ov){
        if(nv){
          loadCorrelations();
        }
      });
    }
  ]);
}());
