import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './components/post/Main';
import PostNew from './components/post/PostNew';
import PostDetail from './components/post/PostDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/newpost" component={PostNew} />
            <Route exact path="/postdetail" component={PostDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
