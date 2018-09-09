import React from 'react';
import { Route } from 'react-router-dom';
import { App } from '../components/AuthorQuiz/AuthorQuiz';
import { AddAuthor } from '../components/AddAuthorForm/AddAuthorForm';

export function Routes() {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/add" component={AddAuthor} />
    </div>
  );
}