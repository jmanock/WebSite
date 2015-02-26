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
// var request = require('request'),
// express = require('express'),
// cheerio = require('cheerio'),
// fs = require('fs'),
// app = express(),
// players = [],
// total = [],
// final = {},
// site = 'http://www.sports.yahoo.com/golf/pga/leaderboard';
//
//
// request(site, function(err, resp, body){
//   if(!err && resp.statusCode == 200){
//     var $ = cheerio.load(body);
//     var $results = $('#leaderboard');
//     $('td.player', '#leaderboardtable').each(function(){
//       // $('td.total','#leaderboardtable' ).each(function(){
//       //
//       // })
//       var pName = $(this).text().trim(/[\n]+/g,'');
//       players.push(pName);
//     });
//
//     $('td.total', '#leaderboardtable').each(function(){
//       var score = $(this).text().trim(/[\n]+/g,'');
//       total.push(score);
//   });
//     for(var i = 0; i < players.length; i++){
//       final[players[i]] = total[i];
//     }
//     var asJSON = JSON.stringify(final);
//     var contact = JSON.parse(asJSON);
//        console.log(contact);
//       //  for(var i =0; i < contact.length; i++){
//       //    request(contact[i].pipe(fs.createWriteStream('img/' + i + '')));
//       //  }
//       contact += '<li>' + contact + '</li>';
//       $results.html(contact);
//   }
//
// });

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

/* Hacker news fron page web scraping */
// var request = require('request');
// var cheerio = require('cheerio');
//
// request('https://news.ycombinator.com/', function(error, response, html){
//   if(!error && response.statusCode == 200){
//     var $ = cheerio.load(html);
//     $('span.comhead').each(function(i, element){
//       var a = $(this).prev();
//       var rank = a.parent().parent().text();
//       var title = a.text();
//       var url = a.attr('href');
//       var subtext = a.parent().parent().next().children('.subtext').children();
//       var points = $(subtext).eq(0).text();
//       var username = $(subtext).eq(1).text();
//       var comments = $(subtext).eq(2).text();
//
//       // Our parsed meta data object
//       var metadata = {
//         rank: parseInt(rank),
//         title: title,
//         url: url,
//         points: parseInt(points),
//         username: username,
//         comments: parseInt(comments)
//       };
//       console.log(metadata);
//     });
//   }
// });

/* Make yahoo golf leaderboard into the hacker news scrapping */
var request = require('request');
var cheerio = require('cheerio');

function leaderBoard(){
request('http://sports.yahoo.com/golf/pga/leaderboard', function(error, response, body){
  if(!error && response.statusCode == 200){
    var $ = cheerio.load(body);
    $('td.player').each(function(i, element){
      var name = $(this).text().trim();
      var score = $(this).next().text();
      if (name.length > 29){
        name = ('');
      }

      var data ={
        Name:name,
        Score:score
      };
      console.log(name);
    });
  }
});
}
leaderBoard();
// setInterval(leaderBoard, 30000);
