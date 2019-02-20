import React, { Component } from 'react';
import Nav from './components/navbar';
import Video from './components/video';
import Videotitle from './components/videotitle.jsx'
import Form from './components/form';
import CommentL from './components/commentlist.jsx'
import Videolist from './components/videolist.jsx'

class App extends Component {
  render() {
    console.log(this.props.mainVideo[0]);
    return (
      <div>
        <Nav />
        <Video />
        
        <div className="flexing2">
          <div>
            <Videotitle mainVideo = {this.props.mainVideo[0]} />
            <Form comlength = {this.props.mainVideo[0].comments}/>
            <CommentL comments = {this.props.mainVideo[0].comments}/>
          </div>
          <Videolist sugs = {this.props.sideVideo}/>
        </div>
      </div>
    );
    }  
}

export default App;
