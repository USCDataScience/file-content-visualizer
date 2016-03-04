angular.module("c.data")

.factory("c.data.Signature", ["$resource", "$q",
  function($resource, $q){
    var Resource = $resource("/data/signatures/bfa", { type: "@type", file: "@file" },{
      get: {
        method: 'GET',
        url: "/data/signatures/bfa/:type",
        transformResponse: function(response){
          var parts = response.split(",");
          parts = _.map(parts, parseFloat)
          return {
            pattern: parts
          };
        },
        cache: true
      },

      getComputed: {
        method: 'GET',
        url: "/data/computed/bfa/:file",
        transformResponse: function(response){
          var parts = response.split(",");
          parts = _.map(parts, parseFloat)
          return {
            pattern: parts
          };
        },
        cache: true
      },
    }),
    proto = Resource.prototype;


    Resource.fetchSignature = function(type){
      var defer = $q.defer();

      new Resource({ type: type }).$get().then(function(r){
        r.type = type;
        defer.resolve(r);
      });

      return defer.promise;
    };

    Resource.fetchComputedSignature = function(file){
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
