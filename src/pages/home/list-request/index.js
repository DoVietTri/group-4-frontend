import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Filter from '../filter';
import { headerTableListRequest } from '../../../constants';
import TableItemRequest from '../../../components/table-item-request';
import formatDate from '../../../helpers/formatDate';
import { useHistory } from 'react-router';

const ListRequest = (props) => {
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
      component="div"
    >
      <Typography
        variant="h5"
        className={classes.title}
      >
        List requests
      </Typography>

      <Filter
        filterOptions={props.filterOptions}
        dataFilter={props.dataFilter}
        onClickHandleFilter={(data) => props.onClickHandleFilter(data)}
        users={props.users}
        statuses={props.statuses}
        admins={props.admins}
        categories={props.categories}
        departments={props.departments}
        fetchListAllRequest={() => props.fetchListAllRequest()}
        clearData={() => props.clearData()}
      />

      <div className={classes.container}>
        <TableContainer className={classes.paper} >
          <Table className={classes.table} stickyHeader aria-label="simple table" >
            <TableHead>
              <TableRow>
                {headerTableListRequest.map((row, index) => {
                  return (
                    <TableCell key={index}>{row}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>

              {props.listAllRequest.map((req, index) => {
                return (
                  <TableItemRequest
                    key={index}
                    id={req.id}
                    nameRequest={req.request_name}
                    contentRequest={req.request_content}
                    authorCreate={req.name_author}
                    dateCreate={formatDate(req.created_at)}
                    category={req.name_category}
                    assignee={req.name_assign}
                    status={req.status_name}
                    handleRedirectPageRequestDetail={handleRedirectPageRequestDetail}
                  />
                )
              })}

            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Pagination count={props.total_page} size="small" color="primary" className={classes.pagination} siblingCount={0} onChange={handleChangePage} />
    </Box>
  )
}

export default ListRequest;
