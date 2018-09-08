import React from 'react';
import './AuthorForm.css';

export class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      books: [],
      bookTemp: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }
  
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleAddBook(event) {
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ''
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="AuthorForm__input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
        </div>
        <div className="AuthorForm__input">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
        </div>
        <div className="AuthorForm__input">
          <label htmlFor="bookTemp">Books</label>
          {this.state.books.map((book) => <p key={book}>{book}</p>)}
          <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
          <input type="button" value="+" onClick={this.handleAddBook} />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}