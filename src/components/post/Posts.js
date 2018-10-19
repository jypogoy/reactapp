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
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { styles } from '../constants';
import * as postActions from '../../actions/postActions';

class Posts extends Component {

    componentWillMount() {
        this.props.changeTitle('Posts');
        this.props.postActions.fetchPosts();                
    }

    render() {
        
        const { classes } = this.props;
        const { posts } = this.props.posts;
        const columns = [
            {
                Header: 'User',
                accessor: 'userId'
            },
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Title',
                accessor: 'title'
            },
            {
                Header: 'Body',
                accessor: 'body'
            }
        ];
        
        return (
            <div>
                <div className={classes.appBarSpacer} />
                {/* <Grid container spacing={24}>
                    <Grid item xs>                        
                        <Typography variant="display1" gutterBottom>                    
                            <QuestionAnswerIcon /> Posts
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color="primary" aria-label="Add" className={classes.button}>
                            New Post
                            <AddIcon className={classes.rightIcon} />
                        </Button>
                        <Button variant="contained" size="small" color="secondary" aria-label="Add" className={classes.button}>
                            Delete Posts
                            <DeleteIcon className={classes.rightIcon} />
                        </Button>
                    </Grid>    
                </Grid> */}
                {/* <Divider  />
                <div className={classes.contentSpacer} /> */}
                <div className={classes.tableContainer}>
                    <ReactTable 
                        data={posts}
                        loading={this.props.posts.fetching}
                        columns={columns}
                        filterable
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                    
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