import React from 'react';
import PropTypes from 'prop-types';
import { shuffle, sample } from 'underscore';
import '../../../style/bootstrap.min.css';
import './Turn.css';
import { Book } from './Book/Book';

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

export function Turn({author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight) {
    const mapping = {
      "none": "",
      "correct": "green",
      "wrong": "red"
    };
    
    return mapping[highlight];
  }
  
  return (
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

export default Turn;
