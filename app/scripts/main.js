/* jshint devel:true */
console.log('\'Allo \'Allo!');
// $(document).ready(function(){
//   $('#zipCode').keyup(function(e){
//     var zipCode = $(this).val();
//
//     // don't do anything until/unless the zip code is at least five characters long and numeric
//     if (zipCode.length === 5 && $.isNumeric(zipCode)) {
//       var requestURL = 'http://ziptasticapi.com/' + zipCode +'?callback=?';
//       $.getJSON(requestURL, null, function(data){
//         console.log(data);
//
//         if (data.city) $('#city').val(data.city);
//         if (data.state) $('#state').val(data.state);
//       });
//     }
//   });
// });
// $('#rep-lookup').submit(function(e){
//   e.preventDefault();
//   var $results = $('#rep-lookup-results'),
//   zipcode = $('#txt-zip').val(),
//   apiKey = '94bf064ac1a14552a45386b5911fbcd4';
//
//   var requestURL='http://congress.api.sunlightfoundation.com/legislators/locate?callback=?';
//
//   $.getJSON(requestURL,{
//     'apikey':apiKey,
//     'zip':zipcode,
//   }, function(data)
var requestURL = 'http://api.cbssports.com/fantasy/sports?version=3.0';
$.getJSON(requestURL,{

}, function(data){
  console.log(data);
});
