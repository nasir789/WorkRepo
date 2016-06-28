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
       <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
       </ul>
    </div>
  }
});
