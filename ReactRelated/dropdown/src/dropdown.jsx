//Need to show button and a list
//this component should know when to show list
//based on when user clicks on buttons

var React = require('react');
var Button = require('./button');
// var List  = require('./list');

module.exports = React.createClass({
  handleClick: function(){
    alert('DinglePop');
  },
  render: function(){
    return <div className="dropdown">
       <Button
       whenClicked={this.handleClick}
       className="btn-default"
       title={this.props.title}
       subTitleClassName="caret"
       />
    </div>
  }
});
