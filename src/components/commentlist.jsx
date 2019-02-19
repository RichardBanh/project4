import React, { Component } from 'react';
import Comment from './comments.jsx'

class CommentL extends Component {
 render() { 
 const commentList = this.props.mainVideo.map(comment =>{
  return <Comment date= {comment.date} name={comment.name} comment={comment.comment} />
})
  return ( 
   <div className='commentpicture'>
     {commentList}
   </div>
   );

 }
}
 
export default CommentL;