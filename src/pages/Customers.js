import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from './constants';

class Customers extends Component {

  componentWillMount() {
    this.props.changeTitle('Customers');
  }

  render() {
    
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        Some customer contents here...
      </div>
    )
  }
}

export default withStyles(constants.styles)(Customers);