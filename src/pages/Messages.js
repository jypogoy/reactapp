import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from './constants';

class Messages extends Component {

  componentWillMount() {
    this.props.changeTitle('Messages');
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        Some messages here...
      </div>
    )
  }
}

export default withStyles(constants.styles)(Messages);