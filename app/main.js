(function(){
  var app = angular.module('Toga', []);

  app.controller('StoreController',['$http', function($http){
    var self = this;
    //this.items = products;
    $http.get('toga.json').success(function(data){
      self.Players = data;
      console.log(data);
    });

  }]);
  var products = [{
    name:"Jon",
    date:["1/1/14", "1/2/12", "1/23/32"],
    score:["66", "78", "90"]
  },
  {
    name:"fernando",
    date:["1/2/32", "1/2/33", "3/2/14"],
    score:["88", "78", "90"]
  },
  {
    name:"rodger",
    date:["2/3/14", "1/2/14", "3/2/99"],
    score:["100", "99", "101"]
  }];
})();
