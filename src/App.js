import React, { Component } from 'react';
import Nav from './components/navbar';
import Video from './components/video';
import Comments from './components/comments.jsx'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div >
        <Nav />
        <Video />
        <Comments mainVideo = {this.props.mainVideo} />
      </div>
    );
    }  
}

export default App;
