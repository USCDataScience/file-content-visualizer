(function(){
  var app = angular.module("c.components.fht");
  app.controller("c.components.fht.Controller", [ "$scope", "c.data.FHT", "$q",
    function($scope, FHT, $q){
      function defineScope(){


        $scope.options = {
          chart: {
            type: 'scatterChart',
            height: 460,
            color: d3.scale.category10().range(),
            scatter: {
              onlyCircles: false
            },
            showDistX: true,
            showDistY: true,
            tooltipContent: function(key) {
              return '<h3>' + key + '</h3>';
            },
            duration: 350,
            xAxis: {
              axisLabel: 'Byte Value',
              tickFormat: function(d){
                  return d3.format('.0f')(d);
              }
            },
            yAxis: {
              axisLabel: 'Offset',
              tickFormat: function(d){
                  return d3.format('.0f')(d);
              },
              axisLabelDistance: -10
            },
            zoom: {
              //NOTE: All attributes below are optional
              enabled: false,
              scaleExtent: [1, 10],
              useFixedDomain: false,
              useNiceScale: false,
              horizontalOff: false,
              verticalOff: false,
              unzoomEventType: 'dblclick.zoom'
            }
          }
        };

        $scope.dHeadTrail = [{
          key: "Range Markers",
          $computed: true,
          values: rangeMarkers()
        }];
      };

      function flatten(offset, matrix, type){
        var d = [ ],
            height = offset,
            width  = 256,
            shape = 'circle';

        for(i in _.range(height)){
          for(j in _.range(width)){
            if(matrix[i][j] > 0){
              d.push({
                x: parseInt(j),
                y: parseInt(i),
                size: parseFloat(matrix[i][j]) * 100,
                shape: shape,
              });
            }
          };
        };
        return d;
      };

      function rangeMarkers(data){
        var d = [ ],
            height = $scope.offset,
            width  = 256;

        d.push({
          x: width,
          y: height,
          size: 10,
          shape: "cross",
        });

        d.push({
          x: width,
          y: 0,
          size: 10,
          shape: "cross",
        });

        d.push({
          x: 0,
          y: height,
          size: 10,
          shape: "cross",
        });

        d.push({
          x: 0,
          y: 0,
          size: 10,
          shape: "cross",
        });
        return d;
      };

      function makeDrawableData(data){
        $scope.dHeadTrail.push({
          key: "Header Signature" + data.fileName,
          $computed: true,
          values: flatten(data.offset, data.header, "head")
        });
        $scope.dHeadTrail.push({
          key: "Trailer Signature"+ data.fileName,
          $computed: true,
          values: flatten(data.offset, data.trailer, "trail")
        });
      };

      function loadFHTForAllTypes(){
        var promises = _.map($scope.types, function(t){
          return new FHT.fetchFHT(t + "-" + $scope.offset);
        });

        $q.all(promises).then(function(data){
          var computed = _.filter($scope.dHeadTrail, function(d){
            return d.$computed
          });

          var data  = _.map(data, function(d){
            return [{
              key: d.type,
              values: flatten(d.offset, d.header),
            },{
              key: d.type,
              values: flatten(d.offset, d.trailer),
            }];
          });

          $scope.dHeadTrail = _.flatten(data);

          if(computed){
            $scope.dHeadTrail = $scope.dHeadTrail.concat(computed);
          };
        });
      };

      function loadComputedFHT(t){
        FHT.fetchComputedFHT(t).then(function(d){
          makeDrawableData(d)
        });
      }

      defineScope();

      $scope.$watch("computed", function(nv){
        if(nv){
          _.map(nv.split(":"), loadComputedFHT);
        }
      });
      $scope.$watch("types", function(nv){
        if(nv && nv.length != 0){
          loadFHTForAllTypes();
        }
      });

    }
  ]);
}());
