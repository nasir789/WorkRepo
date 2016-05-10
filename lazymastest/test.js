//
// "use strict";
// console.log('Hello, world!');
// phantom.exit();


"use strict";
var t = 10,
    interval = setInterval(function(){
        if ( t > 0 ) {
            console.log(t--);
        } else {
            console.log("PHANTOM OPERATING!");
            phantom.exit();
        }
    }, 1000);
