import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './components/common/privateRoute'

import Login from './components/login'
import LoanRequestForm from './components/loanRequestForm'
import loanRequestList from './components/loanRequestList'
import loanRequesterMain from './components/loanRequesterMain'
import loanRepay from './components/loanRepay';
import MaterialHeader from "./components/materialHeader";
class App extends Component {
  render() {
    return (
      <div>
      <MaterialHeader name={"Aspire-Cap Loan Application"}/>
        <Router>
          <div>
            <Route path="/" exact component={Login}></Route>
            <PrivateRoute path="/loanRequestForm/:userId" exact component={LoanRequestForm}></PrivateRoute>   
            <PrivateRoute path="/loanRequestList" exact component={loanRequestList}></PrivateRoute>   
            <PrivateRoute path="/loanRequesterMain/:userId" exact component={loanRequesterMain}></PrivateRoute>   
            <PrivateRoute path="/loanRepay/:userId" exact component={loanRepay}></PrivateRoute>   
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
