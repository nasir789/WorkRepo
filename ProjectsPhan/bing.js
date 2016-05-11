var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  clientScripts:[];
});

//global links variable, to be pushed into an array
var links = [];

//targeting 'b_algo' class, hence '.' and within class target 'a' element
function getLinks() {
  var links = document.querySelectorAll('.b_algo a');
  return Array.prototype.map.call(links, function(e){
    return e.getAttribute('href');
  });
};

casper.start('http://bing.com/', function(){
  this.fill('form[action="/search]',{
    q: 'casperjs'
  }, true);
});

//aggregate results of our search by passing in function 'getLinks'
casper.then(function(){
  //setting global variables, evaluate getLinks 
  links = this.evaluate(getLinks);
})

casper.run();
