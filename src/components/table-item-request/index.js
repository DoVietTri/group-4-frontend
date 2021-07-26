import React from 'react';
import { TableRow, TableCell, IconButton, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { VisibilityOutlined } from '@material-ui/icons';
import useStyles from './styles';

const TableItemRequest = (props) => {
  const classes = useStyles();

  return (
    <TableRow hover className={classes.row} >
      <TableCell>
        <Typography noWrap>
          {props.nameRequest}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography noWrap>
          {props.contentRequest}
        </Typography>
      </TableCell>
      <TableCell>{props.authorCreate}</TableCell>
      <TableCell>{props.dateCreate}</TableCell>
      <TableCell>{props.category}</TableCell>
      <TableCell>{props.assignee}</TableCell>
      <TableCell>{props.status}</TableCell>
      <TableCell align="center">
        <IconButton
          size="small"
          color="primary"
          onClick={() => props.handleRedirectPageRequestDetail(props.id)}
        >
          <VisibilityOutlined fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

TableItemRequest.propTypes = {
  nameRequest: PropTypes.string,
  contentRequest: PropTypes.string,
  dateCreate: PropTypes.string,
  category: PropTypes.string,
  assignee: PropTypes.string,
  status: PropTypes.string
}

export default TableItemRequest;
