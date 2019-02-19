import React, { Component } from 'react';

class Form extends Component {
 
 render() { 
  return (
   <div className="comment-section">
      <div className="text-box">
         <div className="nameandphoto">
           <img src="./Images/Mohan-muruge.jpg" alt=""/>
           <form action="">
               <h4>JOIN THE CONVERSATION</h4>
               <textarea id="comment" type="text" name="comment-section"></textarea>
               <br/>
               <button className="form">COMMENT</button>
           </form>
         </div>
      </div>
   </div>
    );
 }
}
 
export default Form;