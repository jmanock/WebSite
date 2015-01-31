'use strict';
var app = angular.module('instaApp',[]);
app.controller('instaCtrl', function($scope, $http){
//   var url = 'https://api.instagram.com/v1/medai/search?';
//   $http({
//     url:url,
//     method:'GET',
//     data:{
//       distance:'500',
//       client_id:'480749a31b8d4feb86e8164fbfda1f45'
//     },
//     dataType:'jsonp',
//     success:function(result){
//       console.log(result);
//     }
//   });
var apiKey = '94bf064ac1a14552a45386b5911fbcd4';
var zipcode = '61614';
// var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?callback=?';
$http({
  url:'toga.json',
  method:'GET',
  data:{

  }
}).success(function(data, status, headers, config){
  $scope.data = data;
  console.log($scope.data.Players[1].name)
}).error(function(data, status, headers, config){
  $scope.status = status;
});



 });
// $(document).ready(function(){
//   $('#rep-lookup').submit(function(e){
//     e.preventDefault();
//     var $results = $('#rep-lookup-results'),
//     zipcode = $('#txt-zip').val(),
//     apiKey = '94bf064ac1a14552a45386b5911fbcd4';
//
//     var requestURL='http://congress.api.sunlightfoundation.com/legislators/locate?callback=?';
//
//     $.getJSON(requestURL,{
//       'apikey':apiKey,
//       'zip':zipcode,
//     }, function(data){
