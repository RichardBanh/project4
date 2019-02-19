import React, { Component } from 'react';

class Comment extends Component {
 render() { 
  return (  
   <div>
   <div class= "blankimg"></div>
    <div class="commenttitle">
     <div class="titlebox">
      <div class="name">{name}</div>
      <div class="date">{date}</div>
     </div>
     <div class="comment">{comment}</div>
    </div>
   </div>
  );
 }
}
 
export default Comment;