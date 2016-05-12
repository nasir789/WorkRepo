var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  clientScripts:["binglib/jquery.min.js", "binglib/lodash.min.js"]
});

//global links variable, to be pushed into an array
var links = [];

//targeting 'b_algo' class, hence '.' and within class target 'a' element
// function getLinks() {
//   var links = document.querySelectorAll('.b_algo a');
//   return Array.prototype.map.call(links, function(e){
//     return e.getAttribute('href');
//   });
// };

function getLinks() {
  var links = $('.b_algo a');
  return _.map(links, function(e){
    return e.getAttribute('href');
  });
};

casper.start('http://bing.com/', function(){
  this.fill('form[action="/search"]',{
    q: 'casperjs'
  }, true);
});

//aggregate results of our search by passing in function 'getLinks'
casper.then(function(){
  //setting global variables, evaluate getLinks - which will push into array
  links = this.evaluate(getLinks);

  //searching for 'phantomjs' by filling in form again
  this.fill('form[action="/search"]',{
    q: 'phantomjs'
  }, true);


});

casper.then(function(){
  links = links.concat(this.evaluate(getLinks));
});

casper.run(function(){
  //echo results in readible format
  //(below)print out number of links
  this.echo(links.length + 'links found: ');
  //print out links in new line
  this.echo('-' + links.join('\n -')).exit();
});
