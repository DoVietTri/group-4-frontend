import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import MyListRequest from './list-request';
import Wrapper from '../../layouts/wrapper';
import { listMyRequest, handleChangePage } from '../../store/actions/requestAction';
import Toast from '../../components/toast';

const MyRequest = (props) => {
  const classes = useStyles();
  const { fetchListMyRequest } = props;

  useEffect(() => {
    fetchListMyRequest();
  }, [fetchListMyRequest]);

  const handleChangePage = (page) => {
    props.onHandleChangePage({ page: page });
  }

  return (
    <Wrapper>
      <div className={classes.root}>
        <MyListRequest
          listMyRequest={props.listMyRequest}
          total_page={props.total_page_my_request}
          handleChangePage={handleChangePage}
        />
      </div>
      <Toast />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    total_page_my_request: state.request.total_page_my_request,
    listMyRequest: state.request.listMyRequest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListMyRequest: () => {
      dispatch(listMyRequest())
    },
    onHandleChangePage: (number_page) => {
      dispatch(handleChangePage(number_page));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequest)
