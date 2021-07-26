import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { headerTableListRequest } from '../../../constants';
import TableItemRequest from '../../../components/table-item-request';
import { useHistory } from 'react-router';

const MyListRequest = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleChangePage = (e, page) => {
    props.handleChangePage(page);
  }

  const handleRedirectPageRequestDetail = (request_id) => {
    history.push(`/requests/${request_id}`);
  }

  return (
    <Box
      className={clsx(classes.box, classes.listRequest)}
      component="div">
      <Typography
        variant="h5"
        className={classes.title}
      >
        My requests
      </Typography>
      <div className={classes.container}>
        <TableContainer className={classes.paper} >
          <Table className={classes.table} stickyHeader aria-label="my request table" >
            <TableHead>
              <TableRow>
                {headerTableListRequest.map((row, index) => {
                  return (
                    <TableCell key={index} classes={{
                      head: classes.tableHeader
                    }}>{row}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listMyRequest.map((req, index) => {
                return (
                  <TableItemRequest
                    key={index}
                    id={req.id}
                    nameRequest={req.name}
                    contentRequest={req.content}
                    authorCreate={req.author.name}
                    dateCreate={req.created_at}
                    category={req.category.name}
                    assignee={req.assign.name}
                    status={req.status.name}
                    handleRedirectPageRequestDetail={handleRedirectPageRequestDetail}
                  />
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Pagination
        count={props.total_page}
        size="small"
        color="primary"
        className={classes.pagination}
        onChange={handleChangePage}
      />
    </Box>
  )
}

export default MyListRequest
