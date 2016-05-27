var casper = require("casper").create({
  verbose: true,
  logLevel: 'debug', //debug, info, warning, error
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: ''
  },
  clientScripts:["binglib/jquery.min.js", "binglib/lodash.min.js"]
});

var fs = require('fs');
var url = 'http:/pycoders.com/archive'

var link = [];
var title = [];
var date = [];

function getLink(){
  var link = $('.campaign a');
  return _.map(link, function(e){
    return e.getAttribute('href');
  });
};

function getTitle(){
  var title = $('.campaign a');
  return _.map(title, function(e){
    return e.innerHTML;

  });
  console.log('operating')
};

function getDate(){
  var date = $('.campaign');
  return _.map(date, function(e){
    return e.innerText;
  });
};


casper.start(url, function(){
  //do something
})


casper.then(function(){
  //setting global variables, evaluate getLinks - which will push into array
  link = this.evaluate(getLink);

});

casper.then(function(){
  title = this.evaluate(getTitle);
});

casper.then(function(){
  date = this.evaluate(getDate);
});

casper.run(function(){
  //echo results in readible format
  //(below)print out number of links
  this.echo(links.length + 'links found: ');
  //print out links in new line
  this.echo('-' + link.join('\n -'));
  //this.echo('-' + title.join('\n -'));
  //this.echo('-' + date.join('\n -')).exit();
});
