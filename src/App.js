import React, { Component } from 'react';
import Nav from './components/navbar';
import Video from './components/video';
import Videotitle from './components/videotitle.jsx'
import Form from './components/form';
class App extends Component {
  render() {
    console.log(this.props.mainVideo[0]);
    return (
      <div >
        <Nav />
        <Video />
        <Videotitle mainVideo = {this.props.mainVideo[0]} />
        <Form />
      </div>
    );
    }  
}

export default App;
