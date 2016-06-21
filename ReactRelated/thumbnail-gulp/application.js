var options = {
  //key to array of objects will be thumbnailData
  thumbnailData: [{
  title: 'See Tutorials',
  number: 32,
  header: 'Learn React',
  description: 'React is a pretty cool library to help create fast and dynamic pages',
  imageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
},{
  title: 'See Tutorials',
  number: 25,
  header: 'Learn Gulp',
  description: 'Gulp will speed up development workflow,Gulp will speed up development workflow',
  imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
}; //where you define the information in the object


//react to render
//in this example we are rendering ThumbnailList - so it is passed in
var element = React.createElement(ThumbnailList, options);

//where it will place in DOM
 ReactDOM.render(element, document.querySelector('.target'));

//define react component class
//defines form and component of element
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    // this.props // {} - for dynamic

  return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
   this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
  )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    //use map to turn objects into components

    var list = this.props.thumbnailData.map(function(thumbnailProps){
       return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
       //'...'shortcut to passing in entire object values, instead of writing/picking off specifics
    });
    //below will render onto page
    return React.createElement("div", null, 
      list
    )
  }
});

//thumbnail component
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});
