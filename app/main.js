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
// var app = angular.module("myApp", []);
// app.controller('togaCtrl', function($scope, $http){
//   $http.get('toga.json')
//   .success(function(data, status, headers, config){
//     console.log(data.Players);
//     $scope.toga = data;
//   })
//   .error(function(data, status, headers, config){
//
//   });
// });
