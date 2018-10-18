import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import OrderChart from '../components/dashboard/OrderChart';
import ProductTable from '../components/dashboard/ProductTable';

import { styles } from './constants';

class Dashboard extends Component {

    componentWillMount() {
        this.props.changeTitle('Dashboard');
    }

    render() {

        const { classes } = this.props;

        return (            
            <div>
                <div className={classes.appBarSpacer} />
                <Typography variant="display1" gutterBottom>                    
                    Orders
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <OrderChart />
                </Typography>
                <Typography variant="display1" gutterBottom>
                    Products
                </Typography>
                <div className={classes.tableContainer}>
                    <ProductTable />
                </div> 
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);