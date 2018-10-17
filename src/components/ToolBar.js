import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import ProfileMenu from './ProfileMenu';

import * as constants from '../pages/constants';

class ToolBar extends Component {
    render() {
        return (
            <HashRouter>
                <Toolbar disableGutters={!this.props.open} className={this.props.classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(
                            this.props.classes.menuButton,
                            this.props.open && this.props.classes.menuButtonHidden,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap className={this.props.classes.title}>
                        {this.props.title}
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
                        <Link to={`Feedbacks`}>
                            <IconButton color="inherit">
                                <FeedbackIcon />
                            </IconButton>   
                        </Link>
                    </Tooltip>
                    <Tooltip title="Help">
                        <Link to={`Help`}>
                            <IconButton color="inherit">
                                <HelpIcon />
                            </IconButton>   
                        </Link>
                    </Tooltip>
                    <ProfileMenu />      
                </Toolbar>
            </HashRouter> 
        )
    }
}

export default withStyles(constants.styles)(ToolBar);