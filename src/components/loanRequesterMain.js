import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class loanRequesterMain extends Component {
  navigateToApplicationForm = () => {
    this.props.history.push(
      `/loanRequestForm/${this.props.match.params.userId}`
    );
  };

  navigateToRepayLoan = () => {
    this.props.history.push(`/loanRepay/${this.props.match.params.userId}`);
  };

  render() {
    return (
      <div>
        <Typography variant="h5" component="h3">
          Welcome..{" "}
        </Typography>
        <div style={{ margin: "20px", marginLeft: "10%" }}>
          <Button
            variant="contained"
            style={{ margin: "30px" }}
            color="primary"
            onClick={this.navigateToApplicationForm.bind(this)}
          >
            Apply For Loan
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.navigateToRepayLoan.bind(this)}
          >
            Repay Existing Loan
          </Button>
        </div>
      </div>
    );
  }
}
