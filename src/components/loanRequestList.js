import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const api = require('../config/api');

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class loadRequestList extends Component{

  constructor(props){
    super(props)
    this.state = {
      loanApplications:[]
    }
  }

  componentDidMount(){
      api.get(api.Uri.LoanApplications, this.state)
          .then((response) => response.json())
          .then((response) => {
                if(response){
                  this.setState({
                    loanApplications: [...response]
                  })
                }
            })
          .catch((err) => { console.log(err) });
  }
  
  handleLoanApprove(app){
    app.loanstatus = "approved";

    this.setState({
        loanstatus:"approved"
    })

    api.put(api.Uri.LoanApplications+'/'+app.id, app)
    .then((response) => response.json())
    .catch((err) => { console.log(err) });
  }

  renderLoanApplications(classes){
    return this.state.loanApplications.map((app) =>{
    return  (
      <div style={{backgroundColor:"grey", marginLeft:'10%', marginRight:'10%', marginBottom:'3%', marginTop:'3%'}}>
      <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
            Full name: {app.fullname}
            </Typography>
          <Typography component="p" variant="body2">Email: {app.email}</Typography>
          <Typography component="p" variant="body2">Phone: {app.phone}</Typography>
          <Typography component="p" variant="body2">Organization Name: {app.orgname}</Typography>
          <Typography component="p" variant="body2">Purpose of Loan: {app.purpose}</Typography>
          <Typography component="p" variant="body2">Loan Amount: {app.totalLoanAmount}</Typography> 
          <Typography component="p" variant="body2">Loan Term: {app.loanterm}</Typography>
          <Typography component="p" variant="body2">Loan Status: {app.loanstatus}</Typography>
          {app.loanstatus !== "approved" ?  <Button variant="contained" className={classes.button} color="primary" onClick={this.handleLoanApprove.bind(this,app)} >Approve Loan Application</Button> : "" }
      </Paper>
    </div>
    )
    })
  }

  render(){
    const { classes } = this.props;
    return(
      <div>
                <Typography component="h2" variant="headline" style={{margin:'10px', textAlign:'center'}}  gutterBottom>
                    All Loan Applications
                </Typography>

       {this.renderLoanApplications(classes)}
      </div>
    )
  }
}

loadRequestList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(loadRequestList);
