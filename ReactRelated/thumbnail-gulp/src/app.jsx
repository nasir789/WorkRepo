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
