import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Typography,
  InputBase,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Chip,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  SearchOutlined,
  EditOutlined,
} from "@material-ui/icons";
import Pagination from '@material-ui/lab/Pagination';
import Wrapper from "../../layouts/wrapper";
import useStyles from "./styles";
import { HEADER_TABLE_LIST_USER, ROLE_ADMIN, ROLE_DEPARTMENT, STATUS_DEPARTMENT_ENABLE } from "../../constants";
import { getAllUsers, handleChangePageUser, handleSearchUserByName, handleChangeStatusUser } from "../../store/actions/userAction";
import { fetchAllOptionDepartment } from "../../store/actions/optionAction";
import Toast from '../../components/toast';
import PropTypes from 'prop-types';
import Update from './update';
import Create from './create';

const ListUser = (props) => {
  const classes = useStyles();
  const [isOpenDialogEdit, setIsOpenDialogEdit] = useState(false);
  const [isOpenDialogAdd, setIsOpenDialogAdd] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [query, setQuery] = useState("");
  const { fetchAllUsers, fetchDepartments } = props;

  const handleChangePageUser = (e, page) => {
    props.onHandleChangePageUser({search: query, page: page });
  }

  const filterUserByQuery = () => {
    props.searchByName({ search: query });
  }

  const onKeyPressSearch = (e) => {
    if (e.key === 'Enter') {
      filterUserByQuery();
    }
  }

  useEffect(() => {
    fetchAllUsers();
    fetchDepartments({ status: STATUS_DEPARTMENT_ENABLE });
  }, [fetchAllUsers, fetchDepartments]);


  const handleShowDialogUpdate = (user) => {
    setIsOpenDialogEdit(true);
    setUserDetail(user);
  }

  const roleCheck = (role) => {
    if (role === ROLE_ADMIN) {
      return "Admin";
    } if (role === ROLE_DEPARTMENT) {
      return "QLBP";
    } else {
      return "Staff";
    }
  }

  return (
    <Wrapper>
      <div className={classes.root}>
        <Typography variant="h5" align="center" className={classes.title}>
          List users
        </Typography>
        <div className={classes.action}>
          <InputBase
            placeholder="Enter key search...."
            className={classes.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={onKeyPressSearch}
          />
          <Button
            variant="contained"
            color="default"
            onClick={filterUserByQuery}
            startIcon={<SearchOutlined />}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsOpenDialogAdd(true)}
            startIcon={<AddCircleOutlineOutlined />}
          >
            Add
          </Button>
        </div>
        <div className={classes.container}>
          <TableContainer>
            <Table
              className={classes.table}
              stickyHeader
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {HEADER_TABLE_LIST_USER.map((row, index) => {
                    return (
                      <TableCell
                        key={index}
                        classes={{
                          head: classes.tableHeader,
                        }}
                      >
                        {row}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.userList.map((user, index) => {
                    const user_code = user.email.replace("@hblab.vn", "");
                    return (
                      <TableRow hover key={index} className={classes.tableRow}>
                        <TableCell className={classes.tableCellNo}>
                          {" "}
                          {index + 1}{" "}
                        </TableCell>
                        <TableCell>{user.name} </TableCell>
                        <TableCell>{user_code} </TableCell>
                        <TableCell>{user.department ? user.department.name : ''} </TableCell>
                        <TableCell>{roleCheck(user.role_id)} </TableCell>
                        <TableCell>{user.age} </TableCell>
                        <TableCell>
                          <Chip
                            label={user.status === 1 ? "Active" : "Inactive"}
                            color={user.status === 1 ? "primary" : "secondary"}
                            onClick={() => props.fetchChangeStatus(user.id, { status: user.status })}
                          />
                        </TableCell>
                        <TableCell

                          className={classes.tableCellAction}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditOutlined />}
                            onClick={() => handleShowDialogUpdate(user)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={props.total_page_user}
            size="small"
            color="primary"
            className={classes.pagination}
            onChange={handleChangePageUser}
          />
        </div>
        <Toast />
        <Create
          isOpenDialogAdd={isOpenDialogAdd}
          setIsOpenDialogAdd={setIsOpenDialogAdd}
          departments={props.departments}
        />
        <Update
          isOpenDialogEdit={isOpenDialogEdit}
          setIsOpenDialogEdit={setIsOpenDialogEdit}
          departments={props.departments}
          userDetail={userDetail}
        />
      </div>
    </Wrapper>
  );
};

ListUser.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object),
  departments: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
  return {
    userList: state.user.listAll,
    departments: state.option.departments,
    total_page_user: state.user.total_page_user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => {
      dispatch(getAllUsers());
    },
    fetchDepartments: (data) => {
      dispatch(fetchAllOptionDepartment(data));
    },
    onHandleChangePageUser: (number_page) => {
      dispatch(handleChangePageUser(number_page));
    },
    searchByName: (name) => {
      dispatch(handleSearchUserByName(name));
    },
    fetchChangeStatus: (userId, data) => {
      dispatch(handleChangeStatusUser(userId, data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);

