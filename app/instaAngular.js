/* Works getting the links from redditt's home page */
// var request = require('request'),
// cheerio = require('cheerio'),
// urls = [],
// site = 'http://reddit.com';
// request(site, function(err, resp, body){
//   if(!err && resp.statusCode == 200){
//     var $ = cheerio.load(body);
//     // $('a.title', '#siteTable').each(function(){
//     //   var url = this.attr('href');
//     //   urls.push(url);
//     $('a.title', '#siteTable').each(function(){
//       var url = $(this).attr('href');
//       urls.push(url);
//     });
//     console.log(urls.length);
//
//   }
// });

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

  }

});

/* Works getting the images from reddit and storing them into a folder */
// var request = require('request'),
// cheerio = require('cheerio'),
// fs = require('fs'),
// urls = [ ];
//
// request('http://www.reddit.com', function(err, resp, body){
//   if(!err && resp.statusCode == 200){
//     var $ = cheerio.load(body);
//     $('a.title', '#siteTable').each(function(){
//       var url = $(this).attr('href');
//       if(url.indexOf('i.imgur.com')!= -1){
//         urls.push(url);
//       }
//     });
//     console.log(urls);
//     for(var i = 0; i < urls.length; i++){
//       request(urls[i]).pipe(fs.createWriteStream('img/' + i + '.jpg'));
//     }
//   }
// });
