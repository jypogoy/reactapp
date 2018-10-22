import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.grey[300],
        //color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const rows = [
    { id: 'userId', numeric: false, disablePadding: true, label: 'User' },
    { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
    { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
    { id: 'body', numeric: false, disablePadding: false, label: 'Body' },
];

class EnhancedTableHead extends Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        
        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
        
        return (        
            <TableHead>
                <TableRow>
                    <CustomTableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </CustomTableCell>
                    {rows.map(row => {
                    return (
                        <CustomTableCell
                            key={row.id}
                            numeric={row.numeric}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === row.id ? order : false}
                        >
                            <Tooltip
                                title="Sort"
                                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    active={orderBy === row.id}
                                    direction={order}
                                    onClick={this.createSortHandler(row.id)}
                                >
                                {row.label}
                                </TableSortLabel>
                            </Tooltip>
                        </CustomTableCell>
                    );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

export default EnhancedTableHead;