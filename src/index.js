import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './style/index.css';
import AuthorQuiz from './components/AuthorQuiz/AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import authors from './authors.json';
import { getTurnData } from './components/AuthorQuiz/Turn/Turn';

function reducer(
  state = {
    authors,
    turnData: getTurnData(authors),
    highlight: ''
  }, action
) {
  switch (action.type) {
    default: return state;
  }
}

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <Route exact path="/" component={AuthorQuiz} />
    </ReactRedux.Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
