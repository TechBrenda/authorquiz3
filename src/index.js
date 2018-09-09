import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import authors from './authors.json';
import { getTurnData } from './components/AuthorQuiz/Turn/Turn';
import { Routes } from './routes/Routes';

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
    case "ADD_AUTHOR":
      return Object.assign({}, state, { authors: state.authors.concat([action.author]) });
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
      <Routes />
    </ReactRedux.Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
