import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style/bootstrap.min.css';
import { Hero } from './Hero/Hero';
import { Turn } from './Turn/Turn';
import { Continue } from './Continue/Continue';
import { Footer } from './Footer/Footer';

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <p><Link to="/add">Add an author</Link></p>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return({
    turnData: state.turnData,
    highlight: state.highlight
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    onAnswerSelected: (answer) => { dispatch({ type: 'ANSWER_SELECTED', answer }); },
    onContinue: () => { dispatch({ type: 'CONTINUE' }); }
  });
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
  
export default AuthorQuiz;
