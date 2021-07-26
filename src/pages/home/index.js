import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import Wrapper from '../../layouts/wrapper';
import ListRequest from './list-request';
import HistoryRequest from './history-request';
import { listAllRequest, handleFilter, handleChangePage } from '../../store/actions/requestAction';
import { listAllHistoryRequest, handleChangePageHistory } from '../../store/actions/historyAction';
import Toast from '../../components/toast';
import { fetchAllOptionStatus, fetchAllOptionCategory, fetchAllOptionAdmin, fetchAllOptionUser, fetchAllOptionDepartment } from '../../store/actions/optionAction';

const Home = (props) => {
  const classes = useStyles();
  const [dataFilter, setDataFilter] = useState({});
  const { fetchListAllRequest, fetchListAllHistoryRequest, fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllUser, fetchAllDepartment } = props;

  useEffect(() => {
    fetchListAllRequest();
    fetchListAllHistoryRequest();
    fetchAllStatus();
    fetchAllCategory();
    fetchAllAdmin();
    fetchAllUser();
    fetchAllDepartment();
  }, [fetchListAllRequest, fetchListAllHistoryRequest, fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllUser, fetchAllDepartment]);

  const onClickHandleFilter = (data) => {
    let dataFilter = {
      name: data.nameRequest,
      content: data.contentRequest,
      created_at: data.dateCreate,
      status_id: data.status,
      author_id: data.author,
      assign_id: data.assignee,
      category_id: data.category,
      department_id: data.department
    }
    for (let key in dataFilter) {
      if (dataFilter[key] === "") {
        delete dataFilter[key]
      }
    }
    setDataFilter({ ...dataFilter });
    props.onHandleFilter(dataFilter);
  }

  const handleChangePage = (page) => {
    props.onHandleChangePage({ page: page, ...dataFilter });
  }

  const handleChangePageHistory = (page) => {
    props.onHandleChangePageHistory({ page: page });
  }

  return (
    <Wrapper >
      <div className={classes.root} >

        {/* Box list requests */}
        <ListRequest
          listAllRequest={props.listAllRequest}
          filterOptions={props.filterOptions}
          onClickHandleFilter={onClickHandleFilter}
          total_page={props.total_page_request}
          handleChangePage={handleChangePage}
          users={props.users}
          statuses={props.statuses}
          admins={props.admins}
          categories={props.categories}
          departments={props.departments}
          fetchListAllRequest={props.fetchListAllRequest}
          clearData={() => setDataFilter({})}
        />

        {/* Box history request */}
        <HistoryRequest
          listAllHistoryRequest={props.listAllHistoryRequest}
          total_page_history={props.total_page_history}
          handleChangePageHistory={handleChangePageHistory}
        />
      </div>
      <Toast />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    total_page_request: state.request.total_page_request,
    listAllRequest: state.request.listAllRequest,
    filterOptions: state.request.filterOptions,
    total_page_history: state.history.total_page_history,
    listAllHistoryRequest: state.history.listAllHistoryRequest,
    users: state.option.users,
    statuses: state.option.statuses,
    admins: state.option.admins,
    categories: state.option.categories,
    departments: state.option.departments,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListAllRequest: () => {
      dispatch(listAllRequest());
    },
    onHandleFilter: (data) => {
      dispatch(handleFilter(data));
    },
    onHandleChangePage: (number_page) => {
      dispatch(handleChangePage(number_page));
    },
    fetchListAllHistoryRequest: () => {
      dispatch(listAllHistoryRequest());
    },
    onHandleChangePageHistory: (number_page) => {
      dispatch(handleChangePageHistory(number_page));
    },
    fetchAllStatus: () => {
      dispatch(fetchAllOptionStatus());
    },
    fetchAllCategory: () => {
      dispatch(fetchAllOptionCategory());
    },
    fetchAllAdmin: () => {
      dispatch(fetchAllOptionAdmin());
    },
    fetchAllUser: () => {
      dispatch(fetchAllOptionUser());
    },
    fetchAllDepartment: () => {
      dispatch(fetchAllOptionDepartment());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
