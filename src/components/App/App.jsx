import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportInput from '../SupportInput/SupportInput';
import Review from '../Review/Review';
import ThankYou from '..ThankYou/ThankYou'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path='/' exact>
          <FeelingInput />
        </Route>
        <Route path='/understanding' exact>
          <UnderstandingInput />
        </Route>
        <Route path='/support' exact>
          <SupportInput />
        </Route> 
        <Route path='/comments' exact>
          <CommentsInput />
        </Route> 
        <Route path='/review' exact>
          <Review />
        </Route> 
        <Route path='/thankyou' exact>
          <ThankYou />
        </Route> 
      </div>
    </Router>

  );
}

export default App;
