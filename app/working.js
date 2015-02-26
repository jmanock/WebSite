/* WORKS MAKEING A LEADERBOARD THREW YAHOO */
var request = require('request'),
express = require('express'),
cheerio = require('cheerio'),
fs = require('fs'),
app = express(),
players = [],
total = [],
final = {},
site = 'http://www.sports.yahoo.com/golf/pga/leaderboard';

request(site, function(err, resp, body){
  if(!err && resp.statusCode == 200){
    var $ = cheerio.load(body);
    $('td.player', '#leaderboardtable').each(function(){
      // $('td.total','#leaderboardtable' ).each(function(){
      //
      // })
      var pName = $(this).text().trim(/[\n]+/g,'');
      players.push(pName);
    });

    $('td.total', '#leaderboardtable').each(function(){
      var score = $(this).text().trim(/[\n]+/g,'');
      total.push(score);
  });
    for(var i = 0; i < players.length; i++){
      final[players[i]] = total[i];
    }
    var asJSON = JSON.stringify(final);
    var contact = JSON.parse(asJSON);
       console.log(contact);
      //  for(var i =0; i < contact.length; i++){
      //    request(contact[i].pipe(fs.createWriteStream('img/' + i + '')));
      //  }
  }

});
