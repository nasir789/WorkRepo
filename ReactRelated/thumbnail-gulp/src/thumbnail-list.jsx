var ThumbnailList = React.createClass({
  render: function(){
    //use map to turn objects into components

    var list = this.props.thumbnailData.map(function(thumbnailProps){
       return <Thumbnail {...thumbnailProps}/>
       //'...'shortcut to passing in entire object values, instead of writing/picking off specifics
    });
    //below will render onto page
    return <div>
      {list}
    </div>
  }
});
