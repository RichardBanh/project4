import React, { Component } from 'react';
class Nav extends Component {
 render() { 
  return (  
   <div class="navigation">
        <div class= "inner">
            <a href="./index.html"><img src='../src/assets/Logo/Logo-brainflix.svg' alt="logo"/></a>
            <nav>
                <ul>
                    <li class="active"><a href="#">Biography</a></li>
                    <li><a href="./shows.html">Shows</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
 }
}
 
export default Nav;