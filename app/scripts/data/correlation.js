angular.module("c.data")

.factory("c.data.Correlation", ["$resource", "$q",
  function($resource, $q){
    var Resource = $resource("/data/correlations", { type: "@type", file: "@file" },{
      getComputed: {
        method: 'GET',
        url: "/data/computed/bfc/:file",
        transformResponse: function(response){
          var results = response.split("\n");

          var getParts = function(p){
            return _.map(p.split(","), parseFloat);
          };

          var parts = _.map(results, getParts);

          return {
            baseSignature: {
              name: "Base Signature",
              pattern: parts[0],
            },
            comparedSignature: {
              name: "Compared Signature",
              pattern: parts[1],
            },
            correlation: {
              name: "Correlation",
              $correlation: true,
              pattern: parts[2],
            },
          }
        },
        cache: true
      },
      get: {
        method: 'GET',
        url: "/data/signatures/bfc/:type",
        transformResponse: function(response){
          var results = response.split("\n");

          var getParts = function(p){
            return _.map(p.split(","), parseFloat);
          };

          var parts = _.map(results, getParts);

          return {
            baseSignature: {
              name: "Base Signature ",
              pattern: parts[0],
            },
            comparedSignature: {
              name: "Compared Signature ",
              pattern: parts[1],
            },
            correlation: {
              name: "Correlation ",
              $correlation: true,
              pattern: parts[2],
            },
          }
        },
        cache: true
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

    Resource.fetchCorrelation = function(type){
      var defer = $q.defer();

      new Resource({ type: type }).$get().then(function(r){
        r.type = type;
        defer.resolve(r);
      });

      return defer.promise;
    };

    return Resource;
  }
]);
