angular.module("c.data")

.factory("c.data.FHT", ["$resource", "$q",
  function($resource, $q){
    var Resource = $resource("/data/fht", { type: "@type", file: "@file" },{
      getComputed: {
        method: 'GET',
        url: "/data/computed/fht/:file",
        transformResponse: function(response){
          var parts = response.split("\n");

          var offset = parseInt(parts[0]);
          parts.shift();

          var header = parts.slice(0, offset);
          var footer = parts.slice(offset, 2 * offset);

          var strToInt = function(x){ return _.map(x.split(","), parseFloat) };

          return {
            offset: offset,
            header: _.map(header, strToInt),
            trailer: _.map(footer, strToInt),
          }
        },
        cache: true
      },

      get: {
        method: 'GET',
        url: "/data/signatures/fht/:type",
        transformResponse: function(response){
          var parts = response.split("\n");

          var offset = parseInt(parts[0]);
          parts.shift();

          var header = parts.slice(0, offset);
          var footer = parts.slice(offset, 2 * offset);

          var strToInt = function(x){ return _.map(x.split(","), parseFloat) };

          return {
            offset: offset,
            header: _.map(header, strToInt),
            trailer: _.map(footer, strToInt),
          }
        },
        cache: true
      }
    }),
    proto = Resource.prototype;

    Resource.fetchFHT = function(type){
      var defer = $q.defer();

      new Resource({ type: type }).$get().then(function(r){
        r.type = type;
        defer.resolve(r);
      });

      return defer.promise;
    };

    Resource.fetchComputedFHT = function(file){
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
