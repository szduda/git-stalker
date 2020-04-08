import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import users from './Features/UserSearch/users.reducer'
import repos from './Features/UserReposList/repos.reducer'
import App from './App';

const rootReducer = combineReducers({
  users,
  repos
})

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