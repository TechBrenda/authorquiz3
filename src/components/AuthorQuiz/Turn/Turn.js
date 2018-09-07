import React from 'react';
import { shuffle, sample } from 'underscore';
import '../../../style/bootstrap.min.css';
import './Turn.css';

export function getTurnData(authors) {
  const allBooks = authors.reduce(function (p,c,i) {
    return p.concat(c.books);
  }, []);
  
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
  };
}

export function Turn() {
  return (
    <div></div>
  );
}

export default Turn;
