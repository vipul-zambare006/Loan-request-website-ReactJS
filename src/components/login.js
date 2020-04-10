import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";

const api = require("../config/api");

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },

  button: {
    margin: theme.spacing.unit
  }
});

class Login extends Component {
  handleLogin() {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.history.push("/loanRequestList");
    } else {
      api
        .get(api.Uri.Users, this.state)
        .then(response => response.json())
        .then(response => {
          if (response) {
            localStorage.setItem("accessToken", "rerswecscdfrwe2342353");
            console.log("login response", response);
            const userId = response[0].id;
            this.props.history.push(`/loanRequesterMain/${userId}`);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h5">
          User Login
        </Typography>
        <br />
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-name"
              type="username"
              name="username"
              className={classes.textField}
              margin="normal"
              onChange={e => {
                this.handleChange(e);
              }}
              placeholder="Enter you email"
            />
          </div>
          <div>
            <TextField
              id="standard-name"
              margin="normal"
              type="password"
              name="password"
              className={classes.textField}
              onChange={e => {
                this.handleChange(e);
              }}
              placeholder="Password"
            />
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={this.handleLogin.bind(this)}
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
