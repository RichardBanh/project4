import React, { Component } from 'react';
import Nav from './components/navbar';
import Video from './components/video';

class App extends Component {
  render() {
    return (
      <div >
        <Nav />
        <Video />
      </div>
    );
  }
}

export default App;
