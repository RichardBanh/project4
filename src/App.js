import React, { Component } from 'react';
import Nav from './components/navbar';
import Videosection from './components/videosection'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Videosection mainVideo={this.props.mainVideo} sideVideo={this.props.sideVideo}/>
        </BrowserRouter>
      </div>
    );
    }  
}

export default App;
