import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js'
import { fetchVideos } from './actions'
import App from './App';
import './App.css';

// const videos = store;

//videos.dispatch({})
//maybe dispatch with fetchVids("welcome") and default search term to kick it off?

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

