import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './AddAuthorForm.css';
import { AuthorForm } from './AuthorForm/AuthorForm';

function AddAuthorForm({onAddAuthor}) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
}

function mapDispatchToProps(dispatch, props) {
  return ({
    onAddAuthor: (author) => {
      dispatch({ type: 'ADD_AUTHOR', author});
      props.history.push('/');
    }
  });
}

export const AddAuthor = withRouter(connect(() => {}, mapDispatchToProps)(AddAuthorForm));

//export default withRouter(AddAuthor);