import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import clsx from 'clsx';
import Wrapper from '../../layouts/wrapper';
import Toast from '../../components/toast';
import TableItemRequest from '../../components/table-item-request';
import formatDate from '../../helpers/formatDate';
import useStyles from './styles';
import { headerTableListRequest } from '../../constants';
import { adminRequest } from '../../store/actions/requestAction';
import { useHistory } from 'react-router';

const AdminRequest = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { fetchRequestOfAdmin } = props;

  useEffect(() => {
    //original: page 1
    fetchRequestOfAdmin(1);
  }, [fetchRequestOfAdmin]);

  const handleRedirectPageRequestDetail = (requestId) => {
    history.push(`/requests/${requestId}`);
  }

  const handleChangePage = (e, page) => {
    fetchRequestOfAdmin({ page: page });
  }

  return (
    <Wrapper>
      <div className={classes.root} >
        <Box
          className={clsx(classes.box, classes.listRequest)}
          component="div"
        >
          <Typography
            variant="h5"
            className={classes.title}
          >
            Admin Requests
          </Typography>
          <div className={classes.container}>
            <TableContainer className={classes.paper} >
              <Table className={classes.table} stickyHeader aria-label="admin request table" >
                <TableHead>
                  <TableRow>
                    {headerTableListRequest.map((header, index) => {
                      return (
                        <TableCell key={index} classes={{
                          head: classes.tableHeader
                        }}>
                          {header}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.listAdminRequest.map(req => {
                    return (
                      <TableItemRequest
                        key={req.id}
                        id={req.id}
                        nameRequest={req.name}
                        contentRequest={req.content}
                        authorCreate={req.author.name}
                        dateCreate={formatDate(req.created_at)}
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
            count={props.total_page_admin_request}
            size="small"
            color="primary"
            className={classes.pagination}
            onChange={handleChangePage}
          />
        </Box>
      </div>
      <Toast />
    </Wrapper>
  )
}

AdminRequest.propTypes = {
  fetchRequestOfAdmin: PropTypes.func,
  total_page_admin_request: PropTypes.number,
  listAdminRequest: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
  return {
    listAdminRequest: state.request.listAdminRequest,
    total_page_admin_request: state.request.total_page_admin_request
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRequestOfAdmin: (page) => {
      dispatch(adminRequest(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRequest);
