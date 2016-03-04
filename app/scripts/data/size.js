angular.module("c.data")

.factory("c.data.Size", ["$resource", "$q",
  function($resource, $q){
    var Resource = $resource("/data/size", { id: "@id" },{
      cluster: {
        method: 'GET',
        url: "/data/size/clusters.csv",
        transformResponse: function(response){
          var lines = response.split("\n");
          lines.pop();
          return {
            data: _.reduce(lines, function(m, d){
              var parts = d.replace(/\"/g, '').split(",");
              m[parts[0]] = parts.slice(1, parts.length)
              return m;
            }, { }),
          }

        }
      },
      summary: {
        method: 'GET',
        url: "/data/size/summary",
        transformResponse: function(response){
          var parts = response.split("--------");
          parts.pop();

          return {
            data: _.map(parts, function(p){
              var d = p.split("\n");
              d = _.filter(d, function(x){ return x != "" });
              return {
                key: d[0],
                summary: {
                  min: d[1],
                  max: d[6],
                  mean: d[4],
                  median: d[3],
                }
              };
            })
          };
        }
      }
    }),
    proto = Resource.prototype;

    return Resource;

  }
]);
