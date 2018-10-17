import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';

import ToolBar from './ToolBar';
import DrawerMenu from './DrawerMenu';
import Routes from './Routes';

import * as constants from '../pages/constants';

class Layout extends Component {

    state = {
        title: '',
        icon: '',
        open: true,
        toMsgPage: false,
        toNotifPage: false
    };    

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    changeTitle = (title) => {
        this.setState({ title });
    }

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)} >
                        <ToolBar 
                            title={this.state.title} 
                            classes={this.classes} 
                            handleDrawerOpen={this.handleDrawerOpen} 
                            open={this.state.open} 
                            changeTitle={this.changeTitle} />   
                    </AppBar>

                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open} >
                        <DrawerMenu 
                            classes={this.classes} 
                            handleDrawerClose={this.handleDrawerClose} />
                    </Drawer>        

                    <Routes 
                        classes={this.classes} 
                        changeTitle={this.changeTitle} />
                </div>
            </React.Fragment>
        )
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(constants.styles)(Layout)