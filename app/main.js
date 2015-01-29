// $('.search').keyup(function(){
//   var searchField = $('.search').val();
//   var myExp = new RegExp(searchField, 'i');
//   $.getJSON('toga.json',function(data){
//     var output = '<ul class="searchResults">';
//     $.each(data, function(key, val){
//       console.log(val);
//       if(val(myExp) !== -1){
//         output += '<li>';
//         output += '<a href="#">' + val + '</a>';
//         output += '</li>';
//       }
//     });
//     output += '</ul>';
//     $('.update').html(output);
//
//   });
// });
'use strict';
var app = angular.module('togaApp', []);

app.controller('TogaCtrl', function($scope, $http){
  $http.get('toga.json').success(function(data){
    $scope.players = data.Players;
    

    // angular.forEach(data.Players, function(name, key){
    //   console.log(name);
    //   angular.forEach(value.Score, function(score, key){
    //     //console.log(score)
    //   })
    //   angular.forEach(value.Date, function(date, key){
    //     //console.log()
    //   })
    //
    //
    //
    //
    // });

  });
});
