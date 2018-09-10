import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from '../pages/constants';

class Messages extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        <Typography variant="display1" gutterBottom>
            Messages
        </Typography>
      </div>
    )
  }
}

export default withStyles(constants.styles)(Messages);