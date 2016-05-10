var casper = require('casper').create();

casper.start('https://www.wikipedia.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('https://en.wikipedia.org/wiki/PATH_(variable)', function() {
    this.echo(this.getTitle());
});

casper.run();
