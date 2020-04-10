import React, { Component } from 'react';
import {Button, TextField} from '@material-ui/core';

const api = require('../config/api');

export default class LoanRequestForm extends Component
{
  constructor(props){
      super(props)
      
      this.state={
          fullname: '',
          email: '',
          phone:'',
          orgname:'',
          purpose:'',
          totalLoanAmount:'',
          outstandingLoanAmount:'',
          loanterm:'6',
          loanstatus:'pending'
        }

        this.handleLoanRequestFormSubmit = this.handleLoanRequestFormSubmit.bind(this);
  }

  resetForm = () => {
    this.setState({
      fullname: '',
      email: '',
      phone:'',
      orgname:'',
      purpose:'',
      totalLoanAmount:'',
      outstandingLoanAmount:'',
      loanterm:'6',
      loanstatus:'pending'
     })
  }

  handleLoanRequestFormSubmit(){
      const totalLoanAmount = this.state.totalLoanAmount;
      const data = this.state;

      data.outstandingLoanAmount = totalLoanAmount;
      data.userId = Number(this.props.match.params.userId);

      api.post(api.Uri.LoanApplications, data)
          .then((response) => response.json())
          .then(() => {
               this.resetForm();
            })
          .catch((err) => { console.log(err) });
    }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    return(
         <div style={{display:'flex', backgroundColor:"#81D8D0", marginLeft:'10%', marginRight:'10%', marginBottom:'3%', marginTop:'3%', padding:'20px'}}>
        <div>
        <h4>Please fill below application form to apply for loan:</h4>
        <h6>Please Note: All the loans will be assumed to have a “weekly” repayment frequency.</h6>
        </div>
        <form noValidate autoComplete="off">
            <label>Full Name:</label><TextField margin="normal"  name="fullname" value={this.state.fullname} type="text" onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <label>Email:</label><TextField margin="normal"  name="email" type="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <label>Phone Number:</label><TextField margin="normal"  name="phone" type="text" minLength="8" maxLength="8" value={this.state.phone} onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <label>Organization Name:</label><TextField margin="normal"  name="orgname" type="text" value={this.state.orgname} onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <label>Purpose for Loan:</label><TextField margin="normal" name="purpose" type="text" value={this.state.purpose} onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <label>Amount required:</label><TextField margin="normal" name="totalLoanAmount" type="number" value={this.state.totalLoanAmount} onChange={(e)=>{this.handleChange(e)}}></TextField><br></br>
            <TextField
              select
              label="Loan Term"
              value={this.state.loanTerm} name="loanterm" onChange={(e)=>{this.handleChange(e)}}
              SelectProps={{
                native: true
              }}
              helperText="Please select your loan term"
              margin="normal"
            >
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
            </TextField>
            <div><Button variant="contained" color="primary" onClick={this.handleLoanRequestFormSubmit.bind(this)}>Submit Application</Button></div>
        </form>
      </div>
    )
  }
}