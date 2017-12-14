import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './components/user/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
