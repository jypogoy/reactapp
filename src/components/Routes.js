import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Dashboard from '../pages/Dashboard';
import Posts from '../pages/Posts';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Reports from '../pages/Reports';
import Integrations from '../pages/Integrations';
import Messages from '../pages/Messages';
import Notifications from '../pages/Notifications';
import Feedbacks from '../pages/Feedbacks';
import Help from '../pages/Help';

import * as constants from '../pages/constants';

class Routes extends Component {
  render() {
    return (
        <HashRouter>
            <main className={this.props.classes.content}>                
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/dashboard" render={(props) => <Dashboard {...props} changeTitle={this.props.changeTitle} />} />
                <Route path="/posts" render={(props) => <Posts {...props} changeTitle={this.props.changeTitle} />} />
                <Route path="/orders" render={(props) => <Orders {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/customers" render={(props) => <Customers {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/reports" render={(props) => <Reports {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/integrations" render={(props) => <Integrations {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/messages" render={(props) => <Messages {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/notifications" render={(props) => <Notifications {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/feedbacks" render={(props) => <Feedbacks {...props} changeTitle={this.props.changeTitle} />} />
                <Route exact path="/help" render={(props) => <Help {...props} changeTitle={this.props.changeTitle} />} />
            </main>
        </HashRouter>
    )
  }
}

export default withStyles(constants.styles)(Routes)
