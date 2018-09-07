import React from 'react';
import { connect } from 'react-redux';
import '../AuthorQuiz/AuthorQuiz.css';
import '../../style/bootstrap.min.css';
import { Hero } from './Hero/Hero';
import { Turn } from './Turn/Turn';
import { Continue } from './Continue/Continue';
import { Footer } from './Footer/Footer';

function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return({
    
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    
  });
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
  
export default AuthorQuiz;
