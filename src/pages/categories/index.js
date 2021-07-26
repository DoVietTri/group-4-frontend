/* eslint-disable react-hooks/exhaustive-deps */
import { Button, InputBase, Table, TableBody, TableContainer, TableHead, Typography, TableRow, TableCell, Chip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../layouts/wrapper';
import useStyles from './styles';
import { headerTableListCategory, STATUS_ADMIN_ACTIVE } from '../../constants';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { getAll } from '../../store/actions/categoryAction';
import { fetchAllOptionAdmin } from '../../store/actions/optionAction';
import Toast from '../../components/toast';
import Create from './create';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PropTypes from 'prop-types';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Update from './update';

const ListCategory = (props) => {
  const classes = useStyles();
  const [isOpenDialogAdd, setIsOpenDialogAdd] = useState(false);
  const [isOpenDialogEdit, setIsOpenDialogEdit] = useState(false);
  const [categoryDetail, setCategoryDetail] = useState({});
  const [query, setQuery] = useState('');
  const { fetchAllCategories, fetchAdmins } = props;

  useEffect(() => {
    fetchAllCategories();
    fetchAdmins({ status: STATUS_ADMIN_ACTIVE });
  }, [fetchAllCategories, fetchAdmins]);

  /**
   * Filter by query
   * @param {array} arrCate array of json category original
   * @returns array of json category after filter
   */
  const filterCateByQuery = arrCate => arrCate.filter(cate => query === '' ||
    cate.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
    cate.assign.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ? cate : '')

  const handleShowDialogUpdate = (category) => {
    setIsOpenDialogEdit(true);
    setCategoryDetail(category);
  }

  return (
    <Wrapper>
      <div className={classes.root}>
        <Typography
          variant="h5"
          align="center"
          className={classes.title}
        >
          List categories
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
            startIcon={<SearchOutlinedIcon />}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsOpenDialogAdd(true)}
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Add
          </Button>
        </div>
        <div className={classes.container}>
          <TableContainer>
            <Table className={classes.table} stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  {headerTableListCategory.map((row, index) => {
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
                  filterCateByQuery(props.listAll).map((category, index) => {
                    return (
                      <TableRow hover key={category.id} className={classes.tableRow} >
                        <TableCell> {index + 1} </TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.assign ? category.assign.name : ''}</TableCell>
                        <TableCell>
                          <Chip
                            label={category.status === 1 ? 'Enable' : 'Disable'}
                            color={category.status === 1 ? 'primary' : 'secondary'}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditOutlinedIcon />}
                            onClick={() => handleShowDialogUpdate(category)}
                          >
                            Edit
                        </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Pagination color="primary" count={1} size="small" className={classes.pagination} />
      </div>
      <Toast />
      <Create
        isOpenDialogAdd={isOpenDialogAdd}
        setIsOpenDialogAdd={setIsOpenDialogAdd}
        admins={props.admins}
      />
      <Update
        isOpenDialogEdit={isOpenDialogEdit}
        setIsOpenDialogEdit={setIsOpenDialogEdit}
        admins={props.admins}
        categoryDetail={categoryDetail}
      />
    </Wrapper>
  )
}

ListCategory.propTypes = {
  listAll: PropTypes.arrayOf(PropTypes.object),
  admins: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
  return {
    listAll: state.category.listAll,
    admins: state.option.admins,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllCategories: () => {
      dispatch(getAll());
    },
    fetchAdmins: (data) => {
      dispatch(fetchAllOptionAdmin(data));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);
