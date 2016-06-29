//Need to show button and a list
//this component should know when to show list
//based on when user clicks on buttons

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    //setState change will not only change value BUT force component to re-render
     this.setState({open: !this.state.open});
  },
  //will initialize state
  getInitialState: function(){
    return { open: false }
  },
  handleItemClick: function(item){
    this.setState({
      open: false, //close dropdown
      itemTitle: item //what shows up on button

    });

  },
  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick} className={this.state.itemTitle === item ? "active" : ""}
              />
    }.bind(this));
    return <div className="dropdown">
       <Button
       whenClicked={this.handleClick}
       className="btn-default"
       title={this.state.itemTitle || this.props.title}
       subTitleClassName="caret"
        />
       <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
       </ul>
    </div>
  }
});
