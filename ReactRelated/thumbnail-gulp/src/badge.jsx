//define react component class
//defines form and component of element
var Badge = React.createClass({
  render: function() {
    // this.props // {} - for dynamic

  return <button className="btn btn-primary" type="button">
   {this.props.title} <span className="badge">{this.props.number}</span>
  </button>
  }
});
