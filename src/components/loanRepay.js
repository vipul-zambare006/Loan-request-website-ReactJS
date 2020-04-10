import React, { Component } from 'react';
import {Button, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const api = require('../config/api');

export default class LoanRepay extends Component {
  constructor(props){
    super(props)
    this.state={
      totalLoanAmount : 1,
      loanterm:0,
      outstandingLoanAmount: 0
    }
    this.handleRepay = this.handleRepay.bind(this);
  }

  componentDidMount(){
    api.get(api.Uri.LoanApplications, {userId:this.props.match.params.userId})
    .then((response) => response.json())
    .then((response) => {
          if(response){
            const loanData = response[0]
            this.setState({
              totalLoanAmount: Number(loanData.totalLoanAmount),
              outstandingLoanAmount: Number(loanData.outstandingLoanAmount),
              loanterm: Number(loanData.loanterm)
            })
          }
      })
    .catch((err) => { console.log(err) });
  }

  financial = (x) => Number.parseFloat(x).toFixed(2);

  handleRepay(){
    const totalLoan = this.financial(this.state.totalLoanAmount)
    const amountToRepay = this.financial(totalLoan/this.state.loanterm);
    
    this.setState({
      outstandingLoanAmount : this.state.outstandingLoanAmount - amountToRepay
    })

    // api.put(api.Uri.LoanApplications+'/'+app.id, app)
    // .then((response) => response.json())
    // .catch((err) => { console.log(err) });
  }

  renderLoan(){
    return this.state.outstandingLoanAmount > 0 ?
      <Paper>
        <div>
          <div style={{marginLeft:'30px', marginTop:'30px'}}>
            <Typography variant="headline" component="h3">Your Outstanding Loan Amount in SGD:</Typography>
            <Typography  variant="display1" component="h3"><span>$</span>{this.state.outstandingLoanAmount}</Typography>
          </div>
            <Button variant="contained" color="primary" style={{margin:'50px'}} onClick={this.handleRepay.bind(this)}>Repay</Button>
        </div>
        </Paper>
        :
        <Paper>
        <div>
        <Typography variant="headline" component="h3">Congratulations!!! You do not have any outstanding loan amount..</Typography>
        </div>
      </Paper>
  }

  render(){
    return(
      <div style={{backgroundColor:"grey", marginLeft:'10%', marginRight:'10%', marginBottom:'3%', marginTop:'3%'}}>
        {this.renderLoan()}
       </div> 
    )
  }
}
