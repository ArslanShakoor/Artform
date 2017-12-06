import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

//Store to share the state of reducers in all the component
// dev tools is really helpful to check the state on browsers
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
