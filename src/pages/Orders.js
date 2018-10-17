import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import * as constants from './constants';

import OrderTable from '../components/order/OrderTable';

class Orders extends Component {

  componentWillMount() {
      this.props.changeTitle('Orders');
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.appBarSpacer} />
        <div className={classes.tableContainer}>
            <OrderTable />
        </div> 
      </div>
    )
  }
}

export default withStyles(constants.styles)(Orders);