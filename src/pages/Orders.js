import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from '../pages/constants';

import OrderTable from '../components/order/OrderTable';

class Orders extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        <Typography variant="display1" gutterBottom>
            Orders
        </Typography>
        <div className={classes.tableContainer}>
            <OrderTable />
        </div> 
      </div>
    )
  }
}

export default withStyles(constants.styles)(Orders);