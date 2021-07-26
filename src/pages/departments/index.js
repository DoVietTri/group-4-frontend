import { Button, InputBase, Table, TableBody, TableContainer, TableHead, Typography, TableRow, TableCell, Chip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../layouts/wrapper';
import useStyles from './styles';
import { headerTableListDepartment } from '../../constants';
import Toast from '../../components/toast';
import { AddCircleOutlineOutlined, SearchOutlined, EditOutlined } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getAll } from '../../store/actions/departmentAction';
import PropTypes from 'prop-types';
import Create from './create';
import Update from './update';

const ListDepartment = (props) => {
  const classes = useStyles();
  const [isOpenDialogAdd, setIsOpenDialogAdd] = useState(false);
  const [isOpenDialogEdit, setIsOpenDialogEdit] = useState(false);
  const [departmentDetail, setDepartmentDetail] = useState({});
  const [query, setQuery] = useState('');
  const { fetchAllDepartments } = props;

  useEffect(() => {
    fetchAllDepartments();
  }, [fetchAllDepartments]);

  const filterDeptByQuery = arrDept => arrDept.filter(dept => query === '' ||
    dept.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ? dept : '')

  const handleShowDialogUpdate = (department) => {
    setIsOpenDialogEdit(true);
    setDepartmentDetail(department);
  }
  
  return (
    <Wrapper>
      <div className={classes.root}>
        <Typography
          variant="h5"
          align="center"
          className={classes.title}
        >
          List departments
      </Typography>
        <div className={classes.action} >
          <InputBase
            placeholder="Enter key search...."
            className={classes.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="contained"
            color="default"
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
            <Table className={classes.table} stickyHeader aria-label="department table">
              <TableHead>
                <TableRow>
                  {headerTableListDepartment.map((row, index) => {
                    return (
                      <TableCell key={index} classes={{
                        head: classes.tableHeader
                      }}>
                        {row}
                      </TableCell>
                    )
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  filterDeptByQuery(props.listAllDept).map((department, index) => {
                    return (
                      <TableRow className={classes.tableRow} hover key={department.id}>
                        <TableCell className={classes.tableCellNo} > {index + 1} </TableCell>
                        <TableCell>{department.name}</TableCell>
                        <TableCell>{department.department_code}</TableCell>
                        <TableCell>
                          <Chip
                            label={department.status === 1 ? 'Enable' : 'Disable'}
                            color={department.status === 1 ? 'primary' : 'secondary'}
                          />
                        </TableCell>
                        <TableCell
                          className={classes.tableCellAction}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditOutlined />}
                            onClick={() => handleShowDialogUpdate(department)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Toast />
      <Create
        isOpenDialogAdd={isOpenDialogAdd}
        setIsOpenDialogAdd={setIsOpenDialogAdd}
      />
      <Update
        isOpenDialogEdit={isOpenDialogEdit}
        setIsOpenDialogEdit={setIsOpenDialogEdit}
        departmentDetail={departmentDetail}
      />
    </Wrapper>
  )
}

ListDepartment.propTypes = {
  listAllDept: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
  return {
    listAllDept: state.department.listAllDept,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllDepartments: () => {
      dispatch(getAll());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDepartment);
