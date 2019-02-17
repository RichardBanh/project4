import React, { Component } from 'react';
class Video extends Component {
 render() { 
  return ( 
   <div className="VideoSec">
    <video width="100%" height="250px" controls>
     <source src="./Images/video-list-0.jpg" type="jpg"></source>
    </video>
   </div>
   );
 }
}
 
export default Video;