var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  clientScripts:[];
});

var links = [];

function getLinks() {
  var links = document.querySelectorAll('.b_algo a');
  return Array.prototype.map.call(links, function(e){
    return e.getAttribute('href');
  });
};
