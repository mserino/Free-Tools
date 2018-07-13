import React from 'react';
import ReactDOM from 'react-dom';

import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from  'react-redux';
import rootReducer from './redux/reducers';
import { fetchTools } from './redux/actions';

import App from './containers/App';

import './index.css';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );

store.dispatch(fetchTools());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));
