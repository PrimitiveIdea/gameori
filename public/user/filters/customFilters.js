angular.module('customFilters', []).
  filter('ISODateToDate', function() {
    return function(ISODate) {
      return Date.parse(ISODate);
    };
  });