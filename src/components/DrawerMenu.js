import React, { Component } from 'react';
import logo from '../logo.svg';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import * as constants from '../pages/constants';
import { mainListItems, secondaryListItems } from './menuList';

class DrawerMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes.toolbarIcon}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Typography variant="title" color="inherit" noWrap className={this.props.classes.appName}>
                        REACTAPP
                    </Typography>   
                    <IconButton onClick={this.props.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </React.Fragment>
        )
    }
}

export default withStyles(constants.styles)(DrawerMenu);