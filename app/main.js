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


    // Gets the players name
    // angular.forEach(data.Players, function(value, key){
    //   angular.forEach(value.Score, function(score){
    //     //console.log(score +' '+ value.name);
    //     return score;
    //   });
    //   angular.forEach(value.Date, function(date){
    //   //  console.log(date);
    //     return date;
    //   });
    //   //console.log(value.name + ' '+  value.Score + ' ' + value.Date)
    //
    app.controller('TogaCtrl', function($scope, $http){
      $http.get('toga.json').success(function(data){
        $scope.players = data.Players;
        angular.forEach(data.Players, function(value, key){
        //  console.log(value.Score)
          for(var i = 0; i < value.Date.length; i++){
            for(var j=0; j < value.Date[i].length; j++){
              if(value.Date[i] === '01/02/15'){
                console.log(data);
              }
            }
          }
        });
      });
    });
    // });
//     var log = [];
//     angular.forEach(data.Players, function(value, key){
//       this.push(value.name);
//
//     },log);
//     console.log(log);
//
//
//   });
// });

// var url = 'toga.json';
// $.getJSON(url, {
//
// }, function(data){
//
//
//   $.each(data.Players, function(){
//     $.each(this, function(name, value){
//       //console.log(name + ' = ' + value);
//
//     });
//
//   });
//
// });


  // var url = 'toga.json';
  // $.getJSON(url, {
  //
  // }, function(data){
    // var names;
    //
    // $.each(data.Players, function(i, players){
    //   console.log(players.Date);
    //
    //   // names += '<p>';
    //   // names += players.name;
    //   // names += '</p>';
    //
    //
    // //  console.log(players.name)
    //
    //   $.each(players.Score, function(i, score){
    //     //console.log(score + ' = ' + players.name)
    //
    //     //$('.pNames').html(names);
    //   });
    //   $.each(players.Date, function(i, date){
    //     //console.log(date + ' = ' + players.name )
    //
    //   })
    //   //console.log(players.name + ' = ' + date + ' + ' + score);
    //
    // });



  //console.log(data.Players[3].Score)

// LAST I GO TO WORK `KIND OF`

  // for(var i = 0; i < data.Players.length; i++){
  //   var map = {},
  //   date = data.Players[i].Date,
  //   score = data.Players[i].Score,
  //   name = data.Players[i].name;
  //   console.log(date)



    //_.each(date,function(k,i{map[k] = score[i];}));


    // $.each(data.Players, function(i, players){
    //   var score = players.Score;
    //   var date = players.Date;
    //   var map = {};
    //   for(var j = 0; i < date.length; j++ ){
    //     map[date[i] ] = score[i];
    //     return map;
    //     //console.log(map)
    //   }
    //
    //
    //
    // });
