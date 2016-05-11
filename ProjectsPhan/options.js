var casper = require('casper').create();

casper.start('https://www.wikipedia.org/', function(){
  this.echo(this.getTitle());
});

//will print out url you are
casper.then(function(){
  this.echo(this.getCurrentUrl());
});


//below callback function - run after everything is loaded
casper.run(function(){
  this.echo('Done').exit();
});

// casper.run();   //mandatory method, runs the script
