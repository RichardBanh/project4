import React, { Component } from 'react';
import Nav from './components/navbar';
import Videosection from './components/videosection'
import Videoup from './components/videoup.jsx'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  
  render() {
    const videosection = () =><Videosection mainVideo={this.props.mainVideo} sideVideo={this.props.sideVideo}/>
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component = {videosection}/>
          <Route path="/videoup" component = {Videoup}/>
        </Switch>
      </div>
    );
    }  
}

export default App;
