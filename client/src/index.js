import React from 'react';
import { BrowserRouter } from "react-router-dom"
import {createBrowserHistory} from 'history'

import { render } from 'react-dom';

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { rootReducer } from './redux/rootReducer.js';

const store = createStore(rootReducer, compose(
  applyMiddleware(
      thunk
  ),
));

const app = (
  // <Provider store={store}>
  //     <BrowserRouter>
          <App/>
      // </BrowserRouter>
  // </Provider>
);

render(app, document.getElementById('root'));
