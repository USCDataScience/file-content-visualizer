angular.module("c.data")

.factory("c.data.Format", [function(){

  var BEFORE = {
    "application-atom+xml": 2984,
    "application-dita+xml; format=concept": 345,
    "application-epub+zip": 36,
    "application-fits": 24,
    "application-gzip": 2060,
    "application-java-vm": 1,
    "application-msword": 244,
    "application-octet-stream": 211687,
    "application-ogg": 26,
    "application-pdf": 44658,
    "application-postscript": 219,
    "application-rdf+xml": 1042,
    "application-rss+xml": 8894,
    "application-rtf": 53,
    "application-vnd.google-earth.kml+xml": 298,
    "application-vnd.ms-excel": 227,
    "application-vnd.ms-excel.sheet.4": 1,
    "application-vnd.ms-htmlhelp": 1,
    "application-vnd.oasis.opendocument.presentation": 1,
    "application-vnd.oasis.opendocument.text": 10,
    "application-vnd.rn-realmedia": 105,
    "application-vnd.sun.xml.writer": 1,
    "application-x-7z-compressed": 2,
    "application-x-bibtex-text-file": 13,
    "application-x-bittorrent": 3,
    "application-x-bzip": 6,
    "application-x-bzip2": 63,
    "application-x-compress": 44,
    "application-x-debian-package": 4,
    "application-x-elc": 324,
    "application-x-executable": 35,
    "application-x-font-ttf": 9,
    "application-x-gtar": 46,
    "application-x-hdf": 41,
    "application-x-java-jnilib": 5,
    "application-x-lha": 2,
    "application-x-matroska": 66,
    "application-x-msdownload": 72,
    "application-x-msdownload; format=pe": 1,
    "application-x-msdownload; format=pe32": 16,
    "application-x-msmetafile": 6,
    "application-x-rar-compressed": 1,
    "application-x-rpm": 3,
    "application-x-sh": 5680,
    "application-x-shockwave-flash": 141,
    "application-x-sqlite3": 1,
    "application-x-stuffit": 1,
    "application-x-tar": 37,
    "application-x-tex": 17,
    "application-x-tika-msoffice": 2809,
    "application-x-tika-ooxml": 1775,
    "application-x-xz": 11,
    "application-xhtml+xml": 385751,
    "application-xml": 21000,
    "application-xslt+xml": 7,
    "application-zip": 3762,
    "audio-basic": 54,
    "audio-mp4": 18,
    "audio-mpeg": 646,
    "audio-vorbis": 5,
    "audio-x-aiff": 10,
    "audio-x-flac": 2,
    "audio-x-mpegurl": 1,
    "audio-x-ms-wma": 55,
    "audio-x-wav": 59,
    "image-gif": 40049,
    "image-jpeg": 85879,
    "image-png": 37997,
    "image-svg+xml": 342,
    "image-tiff": 477,
    "image-vnd.adobe.photoshop": 4,
    "image-vnd.dwg": 3,
    "image-vnd.microsoft.icon": 1570,
    "image-x-bpg": 7,
    "image-x-ms-bmp": 59,
    "image-x-xcf": 1,
    "message-rfc822": 182,
    "message-x-emlx": 1,
    "text-html": 739588,
    "text-plain": 137335,
    "text-troff": 2,
    "text-x-diff": 1,
    "text-x-jsp": 3,
    "text-x-perl": 14,
    "text-x-php": 25,
    "text-x-python": 5,
    "text-x-vcard": 19,
    "video-mp4": 675,
    "video-mpeg": 255,
    "video-quicktime": 954,
    "video-x-flv": 13,
    "video-x-m4v": 203,
    "video-x-ms-asf": 26,
    "video-x-ms-wmv": 139,
    "video-x-msvideo": 96,
    "xscapplication-zip": 85,
  };

  var NOW = {
      "application-atom+xml": 2913,
      "application-dif+xml": 5813,
      "application-dita+xml; format=concept": 319,
      "application-epub+zip": 30,
      "application-fits": 24,
      "application-gzip": 1732,
      "application-java-vm": 1,
      "application-msword": 2,
      "application-octet-stream": 147023,
      "application-pdf": 44556,
      "application-postscript": 240,
      "application-rdf+xml": 1431,
      "application-rss+xml": 9538,
      "application-rtf": 53,
      "application-vnd.google-earth.kml+xml": 262,
      "application-vnd.ms-excel.sheet.4": 1,
      "application-vnd.ms-htmlhelp": 2,
      "application-vnd.rn-realmedia": 103,
      "application-x-7z-compressed": 2,
      "application-x-bibtex-text-file": 141,
      "application-x-bittorrent": 6,
      "application-x-bzip2": 110,
      "application-x-compress": 42,
      "application-x-debian-package": 5,
      "application-x-elc": 299,
      "application-x-executable": 44,
      "application-x-font-ttf": 9,
      "application-x-grib": 3,
      "application-x-gtar": 58,
      "application-x-hdf": 27,
      "application-x-java-jnilib": 1,
      "application-x-lha": 2,
      "application-x-matroska": 66,
      "application-x-msdownload": 85,
      "application-x-msdownload; format=pe": 1,
      "application-x-msdownload; format=pe32": 20,
      "application-x-msmetafile": 5,
      "application-x-rar-compressed": 1,
      "application-x-rpm": 6,
      "application-x-sh": 2127,
      "application-x-shockwave-flash": 128,
      "application-x-sqlite3": 1,
      "application-x-stuffit": 1,
      "application-x-tar": 37,
      "application-x-tex": 20,
      "application-x-tika-msoffice": 1,
      "application-x-tika-ooxml": 1606,
      "application-x-xz": 21,
      "application-xhtml+xml": 382967,
      "application-xml": 9280,
      "application-xslt+xml": 18,
      "application-zip": 2674,
      "application-zlib": 28,
      "audio-basic": 55,
      "audio-mp4": 18,
      "audio-mpeg": 659,
      "audio-x-aiff": 11,
      "audio-x-flac": 3,
      "audio-x-mpegurl": 2,
      "audio-x-ms-wma": 55,
      "audio-x-wav": 77,
      "image-gif": 35960,
      "image-jpeg": 88518,
      "image-png": 38984,
      "image-svg+xml": 372,
      "image-tiff": 452,
      "image-vnd.adobe.photoshop": 4,
      "image-vnd.dwg": 3,
      "image-vnd.microsoft.icon": 1640,
      "image-x-bpg": 14,
      "image-x-ms-bmp": 60,
      "image-x-xcf": 2,
      "message-rfc822": 205,
      "message-x-emlx": 1,
      "text-html": 750248,
      "text-plain": 109795,
      "text-troff": 3,
      "text-x-csrc": 3,
      "text-x-diff": 1,
      "text-x-jsp": 3,
      "text-x-matlab": 1362,
      "text-x-perl": 17,
      "text-x-php": 28,
      "text-x-python": 7,
      "text-x-vcard": 13,
      "video-mp4": 628,
      "video-mpeg": 231,
      "video-quicktime": 887,
      "video-x-flv": 16,
      "video-x-m4v": 169,
      "video-x-ms-asf": 26,
      "video-x-ms-wmv": 132,
      "video-x-msvideo": 99,
    };

  var INTER = {
    "application-octet-stream": 953,
  };

  var AFTER = {
    'audio-vorbis': 3,
    'application-vnd.ms-powerpoint': 10,
    'video-theora': 23,
    'application-vnd.ms-excel': 22,
    'application-x-tika-msoffice': 7,
    'application-msword': 72,
    'application-octet-stream': 788,
    'application-vnd.ms-cab-compressed': 1,
    'image-fits': 3,
    'application-x-netcdf': 18,
    "video-quicktime": 6,
  };

  var asCollection = function(d){
    return _.map(d, function(value, key){
      return {
        key: key,
        value: value
      }
    });
  };

  var getDataSet = function(type){
    if(type == "before"){
      return BEFORE;
    } else if(type == "now"){
      return NOW;
    } else if(type == "after"){
      return AFTER;
    } else if(type == "inter"){
      return INTER;
    } else if(type == "after"){
      return AFTER;
    };
  };


  function Format(){ }

  Format.getData = function(type){
    return asCollection(getDataSet(type));
  };


  Format.getDiff = function(t1, t2){
    var d1 = getDataSet(t1);
    var d2 = getDataSet(t2);
    var types = _.union(_.keys(d1), _.keys(d2));
    return _.map(types, function(t){
      return { type: t, d1: d1[t] || 0, d2: d2[t] || 0, diff: (d2[t] || 0) - (d1[t] || 0) }
    });
  };

  Format.getSum = function(type){
    var d1 = getDataSet(type);
    return _.reduce(d1, function(m, v){
      return m + v
    }, 0);
  };

  return Format;

}]);
