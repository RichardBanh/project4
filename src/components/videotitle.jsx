import React, { Component } from 'react';

class Videotitle extends Component {
 
 render() {
  var mainpath = this.props.mainVideo
  console.log(mainpath.likes)
  console.log(mainpath.title)
  console.log(mainpath.views)
  console.log(mainpath.timestamp)
  console.log(mainpath.description)
  return (
   <div className='videotitle'>
    <h1>{mainpath.title}</h1>
    <div>
     <h3>By {mainpath.id}<span>{mainpath.timestamp}</span></h3>
     <div className='likesviews'>
      <div className="views">
       <img src="./Icons/SVG/Icon-views.svg" alt="Eye Icon"/>
       <h4>{mainpath.views}</h4>
      </div>
      <div className="likes">
       <img src="./Icons/SVG/Icon-likes.svg" alt=""/>
       <h4>{mainpath.likes}</h4>
      </div>
     </div>
     <div className="divbox">
     </div>
    </div>
    <p>{mainpath.description}</p>
   </div>
  );
 }
}

export default Videotitle;