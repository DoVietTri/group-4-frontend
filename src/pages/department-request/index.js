import React, { useEffect } from 'react';
import useStyles from './styles';
import Wrapper from '../../layouts/wrapper';
import DepartmentListRequest from './list-request'
import Toast from '../../components/toast';
import { connect } from 'react-redux';
import { listDepartmentRequest, handleChangePage } from '../../store/actions/requestAction'

const DepartmentRequest = (props) => {
  const classes = useStyles();
  const { fetchListDepartmentRequest } = props;

  useEffect(() => {
    fetchListDepartmentRequest();
  }, [fetchListDepartmentRequest]);

  const handleChangePage = (page) => {
    props.onHandleChangePage({ page: page });
  }

  return (
    <Wrapper>
      <div className={classes.root} >
        <DepartmentListRequest
          listDepartmentRequest={props.listDepartmentRequest}
          total_page={props.total_page_department_request}
          handleChangePage={handleChangePage}
        />
      </div>
      <Toast />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    total_page_department_request: state.request.total_page_department_request,
    listDepartmentRequest: state.request.listDepartmentRequest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListDepartmentRequest: () => {
      dispatch(listDepartmentRequest())
    },
    onHandleChangePage: (number_page) => {
      dispatch(handleChangePage(number_page));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentRequest)
