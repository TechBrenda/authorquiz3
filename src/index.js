import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './style/index.css';
import { App } from './components/AuthorQuiz/AuthorQuiz';
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
    case "ANSWER_SELECTED":
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign({}, state, { highlight: isCorrect ? "correct" : "wrong" });
    case "CONTINUE":
      return Object.assign({}, state, { highlight: "", turnData: getTurnData(state.authors) });
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
      <Route exact path="/" component={App} />
    </ReactRedux.Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
