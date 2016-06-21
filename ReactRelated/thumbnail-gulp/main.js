(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/NasirX/workteststuff/workthings/WorkRepo/ReactRelated/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/NasirX/workteststuff/workthings/WorkRepo/ReactRelated/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTmFzaXJYL3dvcmt0ZXN0c3R1ZmYvd29ya3RoaW5ncy9Xb3JrUmVwby9SZWFjdFJlbGF0ZWQvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRzs7RUFFWixhQUFhLEVBQUUsQ0FBQztFQUNoQixLQUFLLEVBQUUsZUFBZTtFQUN0QixNQUFNLEVBQUUsRUFBRTtFQUNWLE1BQU0sRUFBRSxhQUFhO0VBQ3JCLFdBQVcsRUFBRSxzRUFBc0U7RUFDbkYsUUFBUSxFQUFFLGlHQUFpRztDQUM1RyxDQUFDO0VBQ0EsS0FBSyxFQUFFLGVBQWU7RUFDdEIsTUFBTSxFQUFFLEVBQUU7RUFDVixNQUFNLEVBQUUsWUFBWTtFQUNwQixXQUFXLEVBQUUsaUZBQWlGO0VBQzlGLFFBQVEsRUFBRSw0REFBNEQ7R0FDckUsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtBQUNuRDs7QUFFQSxpQkFBaUI7QUFDakIscUVBQXFFO0FBQ3JFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCw0QkFBNEI7Q0FDM0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBvcHRpb25zID0ge1xuICAvL2tleSB0byBhcnJheSBvZiBvYmplY3RzIHdpbGwgYmUgdGh1bWJuYWlsRGF0YVxuICB0aHVtYm5haWxEYXRhOiBbe1xuICB0aXRsZTogJ1NlZSBUdXRvcmlhbHMnLFxuICBudW1iZXI6IDMyLFxuICBoZWFkZXI6ICdMZWFybiBSZWFjdCcsXG4gIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBwcmV0dHkgY29vbCBsaWJyYXJ5IHRvIGhlbHAgY3JlYXRlIGZhc3QgYW5kIGR5bmFtaWMgcGFnZXMnLFxuICBpbWFnZVVybDogJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tZWRpYS1wLnNsaWQuZXMvdXBsb2Fkcy9hbGV4YW5kZXJmYXJlbm5pa292L2ltYWdlcy8xMTk4NTE5L3JlYWN0anMucG5nJ1xufSx7XG4gIHRpdGxlOiAnU2VlIFR1dG9yaWFscycsXG4gIG51bWJlcjogMjUsXG4gIGhlYWRlcjogJ0xlYXJuIEd1bHAnLFxuICBkZXNjcmlwdGlvbjogJ0d1bHAgd2lsbCBzcGVlZCB1cCBkZXZlbG9wbWVudCB3b3JrZmxvdyxHdWxwIHdpbGwgc3BlZWQgdXAgZGV2ZWxvcG1lbnQgd29ya2Zsb3cnLFxuICBpbWFnZVVybDogJ2h0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjIwMDYyND92PTMmcz00MDAnXG4gIH1dXG59OyAvL3doZXJlIHlvdSBkZWZpbmUgdGhlIGluZm9ybWF0aW9uIGluIHRoZSBvYmplY3RcblxuXG4vL3JlYWN0IHRvIHJlbmRlclxuLy9pbiB0aGlzIGV4YW1wbGUgd2UgYXJlIHJlbmRlcmluZyBUaHVtYm5haWxMaXN0IC0gc28gaXQgaXMgcGFzc2VkIGluXG52YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5cbi8vd2hlcmUgaXQgd2lsbCBwbGFjZSBpbiBET01cbiBSZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTtcbiJdfQ==
