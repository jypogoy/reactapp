import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Dashboard from '../components/dashboard/Dashboard';
import Posts from '../components/post/Posts';
import Orders from '../components/order/Orders';
import Customers from '../components/customer/Customers';
import Reports from '../components/report/Reports';
import Integrations from '../components/integration/Integrations';
import Messages from '../components/message/Messages';
import Notifications from '../components/notification/Notifications';
import Feedbacks from '../components/feedback/Feedbacks';
import Help from '../components/help/Help';

import { styles } from './constants';

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

export default withStyles(styles)(Routes)
