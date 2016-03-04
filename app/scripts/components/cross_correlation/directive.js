(function(){
  var app = angular.module("c.components.crossCorrelation");
  app.directive("cCrossCorrelation", [function(){
    return{
      scope: {
        computed: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/cross_correlation/template.html",
      controller: "c.components.crossCorrelation.Controller",
      link: function($scope, elem, attrs){

        var heatmapChart = function(data) {
          // Empty existing graph
          angular.element(elem.find(".cross-correlation")[0]).html("")

          var margin = { top: 50, right: 0, bottom: 100, left: 30 },
              width = 960 - margin.left - margin.right,
              height = 960 - margin.top - margin.bottom,
              gridSize = Math.floor(width / 256),
              legendElementWidth = gridSize*2,
              buckets = 9,
              colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"];

          var svg = d3.select(elem.find(".cross-correlation")[0]).append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


          var colorScale = d3.scale.pow(-1/1.5)
                             .domain([-1, 0, 1])
                             .range(["black", "white", "black"]);

          var cards = svg.selectAll(".byte")
              .data(data, function(d) {return d.y+':'+d.x;});

          cards.append("title");

          cards.enter().append("rect")
              .attr("x", function(d) { return (d.x - 1) * gridSize; })
              .attr("y", function(d) { return (d.y - 1) * gridSize; })
              .attr("rx", 0)
              .attr("ry", 0)
              .attr("class", "byte bordered")
              .attr("width", gridSize)
              .attr("height", gridSize)
              .style("fill", colors[0]);

          cards.transition().duration(1000)
              .style("fill", function(d) { return colorScale(d.value); });

          cards.select("title").text(function(d) { return d.value; });

          cards.exit().remove();
        };

        function drawCorGraph(data){
          var drawableData = [ ];

          for(i in _.range(256)){
            for(j in _.range(256)){
              drawableData.push({
                x: i,
                y: j,
                value: data[i][j]
              })
            }
          }

          heatmapChart(drawableData);
        };

        $scope.$watch("data", function(nv, ov){
          if(nv){ drawCorGraph(nv) }
        });

      }
    };
  }]);

}());
