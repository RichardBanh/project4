import React, { Component } from 'react';
class Nav extends Component {
 render() { 
  return (  
   <div className="navigation">
        <div className= "inner">
            <a href="./index.html"><img src="./Logo/Logobrainflix.svg" alt="logo"/></a>
            <nav>
                <ul>
                    <li className="active"><a href="#">Biography</a></li>
                    <li><a href="./shows.html">Shows</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
 }
}
 
export default Nav;