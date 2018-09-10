import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, Link, NavLink, HashRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';

import * as constants from './constants';
import { mainListItems, secondaryListItems } from '../components/menuList';
import ProfileMenu from '../components/ProfileMenu';

import Dashboard from './Dashboard';
import Orders from './Orders';
import Customers from './Customers';
import Reports from './Reports';
import Integrations from './Integrations';
import Messages from './Messages';
import Notifications from './Notifications';

class Layout extends Component {

    state = {
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

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <HashRouter>
                            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden,
                                    )}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" noWrap className={classes.title}>
                                    Dashboard
                                </Typography>
                                <Tooltip title="Messages">
                                    <Link to={`messages`}>
                                        <IconButton color="inherit">
                                            <Badge badgeContent={10} color="secondary">
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                    </Link>        
                                </Tooltip>           
                                <Tooltip title="Notifications">
                                    <Link to={`notifications`}>
                                        <IconButton color="inherit">
                                            <Badge badgeContent={4} color="secondary">
                                                <NotificationsIcon />
                                            </Badge>
                                        </IconButton>   
                                    </Link>  
                                </Tooltip>
                                <Tooltip title="Send feedback">
                                    <Link to={``}>
                                        <IconButton color="inherit">
                                            <FeedbackIcon />
                                        </IconButton>   
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Help">
                                    <Link to={``}>
                                        <IconButton color="inherit">
                                            <HelpIcon />
                                        </IconButton>   
                                    </Link>
                                </Tooltip>
                                <ProfileMenu />      
                            </Toolbar>
                        </HashRouter>    
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <img src={logo} className="App-logo" alt="logo" />
                            <Typography variant="title" color="inherit" noWrap className={classes.appName}>
                                REACTAPP
                            </Typography>   
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        <List>{secondaryListItems}</List>
                    </Drawer>
                    <HashRouter>
                        <main className={classes.content}>                
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/orders" component={Orders} />
                            <Route exact path="/customers" component={Customers} />
                            <Route exact path="/reports" component={Reports} />
                            <Route exact path="/integrations" component={Integrations} />
                            <Route exact path="/messages" component={Messages} />
                            <Route exact path="/notifications" component={Notifications} />
                        </main>
                    </HashRouter>
                </div>
            </React.Fragment>
        )
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(constants.styles)(Layout);