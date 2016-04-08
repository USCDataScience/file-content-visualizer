angular.module("c.data")

.factory("c.data.CrossCorrelation", ["$resource", "$q",
  function($resource, $q){
    var Resource = $resource(content.dataUrl("/data/cross_correlations"), { type: "@type", file: "@file" },{
      getComputed: {
        method: 'GET',
        url: content.dataUrl("/data/computed/bfcc/:file"),
        transformResponse: function(response){
          //
          var correlation = _.map(response.split("\n"), function(l){
            return _.map(l.split(","), parseFloat);
          });

          return {
            pattern: correlation
          };
        },
        cache: true,
      },
    }),
    proto = Resource.prototype;

    Resource.fetchComputedCorrelation = function(file){
      var defer = $q.defer();

      new Resource({ file: file }).$getComputed().then(function(r){
        r.fileName = file;
        defer.resolve(r);
      });

      return defer.promise;
    };

    return Resource;
  }
]);
