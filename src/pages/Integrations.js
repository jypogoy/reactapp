import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import { styles } from './constants';

class Integrations extends Component {

  componentWillMount() {
    this.props.changeTitle('Integrations');
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        Some contents for integration here...
      </div>
    )
  }
}

export default withStyles(styles)(Integrations);