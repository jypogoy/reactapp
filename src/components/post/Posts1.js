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
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { styles } from '../constants';
import * as postActions from '../../actions/postActions';

class Posts extends Component {

    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        page: 0,
        rowsPerPage: 5,
    }

    componentWillMount() {
        this.props.changeTitle('Posts');
        this.props.postActions.fetchPosts();                
    }

    render() {
        
        const { classes } = this.props;
        const rows = this.props.posts.posts;
        
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
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell numeric>User</TableCell>
                                    <TableCell numeric>ID</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Body</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>                            
                                {rows.map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell key={row.id}>{row.userId}</TableCell>
                                            <TableCell numeric>{row.id}</TableCell>
                                            <TableCell numeric>{row.title}</TableCell>
                                            <TableCell numeric>{row.body}</TableCell>
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