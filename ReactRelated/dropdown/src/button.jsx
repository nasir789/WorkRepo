 var React = require('react');

//define react component class
//defines form and component of element
module.exports = React.createClass({
  render: function() {
    // this.props // {} - for dynamic

  return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
   {this.props.title}
   <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
  </button>
  }
});
