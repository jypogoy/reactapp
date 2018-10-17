import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from './constants';

class Notifications extends Component {

  componentWillMount() {
    this.props.changeTitle('Notifications');
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        Some notifications here...
      </div>
    )
  }
}

export default withStyles(constants.styles)(Notifications);