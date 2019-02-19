import React, { Component } from 'react';
import Comment from './comment'
class CommentL extends Component {
 render() { 
  console.log(this.props.comments)


  return ( 
   <div>
   <Comment comment={this.props.comments}/>
   </div>
   );

 }
}
 
export default CommentL;