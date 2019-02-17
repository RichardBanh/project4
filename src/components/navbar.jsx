import React, { Component } from 'react';
class Nav extends Component {
 render() { 
  return (  
   <div className="navigation">
        <div className= "inner">
            <a href="./index.html"><img src="./Logo/Logobrainflix.svg" alt="logo"/></a>
            <nav>
                <input type="search" name="" id=""placeholder="Search"/>
                <ul>
                    <button><img src="./plus.svg" alt=""/><p>UPLOAD</p></button>
                    <img className="usericon" src="./Images/Mohan-muruge.jpg" alt="User"/>
                </ul>
            </nav>
        </div>
    </div>
  );
 }
}
 
export default Nav;