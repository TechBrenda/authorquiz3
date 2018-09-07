import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import AuthorQuiz from './components/AuthorQuiz/AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));
registerServiceWorker();
