var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', //what should show up on the button to open/close dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};


//react to render
//in this example we are rendering ThumbnailList - so it is passed in
var element = React.createElement(Dropdown, options);

//where it will place in DOM
 React.render(element, document.querySelector('.target'));
