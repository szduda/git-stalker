import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import App from './App';
import rootReducer from './root.reducer'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);