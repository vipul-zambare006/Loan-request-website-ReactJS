import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";

export default class MaterialHeader extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {this.props.name}
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
