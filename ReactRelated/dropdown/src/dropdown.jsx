//Need to show button and a list
//this component should know when to show list
//based on when user clicks on buttons

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    alert('Helloooo');
  },
  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem item={item} />
    });
    return <div className="dropdown">
       <Button
       whenClicked={this.handleClick}
       className="btn-default"
       title={this.props.title}
       subTitleClassName="caret"
       />
       <ul>
        {list}
       </ul>
    </div>
  }
});
