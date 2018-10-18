import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { styles } from './constants';
import * as postActions from '../actions/postActions';

class Posts extends Component {

    componentWillMount() {
        this.props.changeTitle('Posts');
        this.props.postActions.fetchPosts();
    }

    render() {
        
        const { classes } = this.props;
        const { posts } = this.props.posts;

        return (
            <div>
                <div className={classes.appBarSpacer} />
                <div className={classes.tableContainer}>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell numeric>User</TableCell>
                                <TableCell numeric>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>                            
                                {posts.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">{n.userId}</TableCell>
                                            <TableCell numeric>{n.id}</TableCell>
                                            <TableCell numeric>{n.title}</TableCell>
                                            <TableCell numeric>{n.body}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>               
                </div> 
            </div>           
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    };
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Posts));