import { Box, Button, List, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import Wrapper from '../../../layouts/wrapper';
import useStyles from './styles';
import { connect } from 'react-redux';
import { fetchAllOptionStatus, fetchAllOptionCategory, fetchAllOptionAdmin, fetchAllOptionPriority, fetchCategoryAfterHandleChangeAssign, fetchAssignAfterHandleChangeCategory } from '../../../store/actions/optionAction';
import { addNewRequest } from '../../../store/actions/requestAction';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Toast from '../../../components/toast';
import ItemAddRequest from '../../../components/item-add-request';
import { STATUS_CATE_ENABLE, STATUS_ADMIN_ACTIVE } from '../../../constants';
import formatDate from '../../../helpers/formatDate';

const CreateRequest = (props) => {
  const classes = useStyles();
  const { fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllPriority } = props;

  useEffect(() => {
    fetchAllStatus();
    fetchAllCategory({ status: STATUS_CATE_ENABLE });
    fetchAllAdmin({ status: STATUS_ADMIN_ACTIVE });
    fetchAllPriority();
  }, [fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllPriority]);

  const newRequest = useFormik({
    initialValues: {
      name: '',
      content: '',
      status_id: 1,
      assign_id: '',
      category_id: '',
      due_date: '',
      priority_id: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required !"),
      content: Yup.string()
        .required("Required !"),
      assign_id: Yup.number()
        .required("Required !"),
      category_id: Yup.number()
        .required("Required !"),
      priority_id: Yup.number()
        .required('Required !'),
      due_date: Yup.date()
        .min(formatDate(new Date()), 'Must be greater or equals than today')
        .required("Required !")
    }),
    onSubmit: (values) => {
      props.handleAddNewRequest(values);
    }
  });

  const handleChangeCategory = (value) => {
    newRequest.setFieldValue('category_id', value);

    let cateById = props.categories.filter(cate => cate.id === value);
    newRequest.setFieldValue('assign_id', cateById[0].user_id);
  }

  return (
    <Wrapper >
      <div className={classes.root}>
        <form>
          <div className={classes.header}>
            <Typography
              variant="h5"
              className={classes.title}
            >
              Create request
            </Typography>
            <div className={classes.grow} />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={newRequest.handleSubmit}
            >
              Create
            </Button>
          </div>
          <TextField
            className={classes.requestTitle}
            label="Title"
            variant="outlined"
            type="text"
            FormHelperTextProps={{
              className: classes.helperText
            }}
            name="name"
            value={newRequest.values.name}
            onChange={newRequest.handleChange}
            helperText={newRequest.touched.name && newRequest.errors.name}
          />
          <Box
            className={classes.box}
          >
            <TextField
              variant="outlined"
              fullWidth
              multiline={true}
              rows={5}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              placeholder={"Add a description..."}
              name="content"
              value={newRequest.values.content}
              onChange={newRequest.handleChange}
              helperText={newRequest.touched.content && newRequest.errors.content}
            />
            <List
              className={classes.boxDetail}
            >
              <ItemAddRequest
                label={"Status"}
                name={"status_id"}
                select={true}
                value={newRequest.values.status_id}
                handleChange={(value) => newRequest.setFieldValue('status_id', value)}
                data={props.statuses}
                disable={true}
                error={newRequest.touched.status_id && newRequest.errors.status_id}
              />
              <ItemAddRequest
                label={"Assign"}
                name={"assign_id"}
                select={true}
                value={newRequest.values.assign_id}
                handleChange={(value) => newRequest.setFieldValue('assign_id', value)}
                data={props.admins}
                error={newRequest.errors.assign_id}
                touched={newRequest.touched.assign_id}
              />
              <ItemAddRequest
                label={"Category"}
                name={"category_id"}
                select={true}
                value={newRequest.values.category_id}
                handleChange={handleChangeCategory}
                data={props.categories}
                error={newRequest.errors.category_id}
                touched={newRequest.touched.category_id}
              />
              <ItemAddRequest
                label={"Due date"}
                name="due_date"
                select={false}
                type={"date"}
                value={newRequest.values.due_date}
                handleChange={(value) => newRequest.setFieldValue('due_date', value)}
                error={newRequest.touched.due_date && newRequest.errors.due_date}
              />
              <ItemAddRequest
                label={"Priority"}
                name={"priority_id"}
                select={true}
                value={newRequest.values.priority_id}
                handleChange={(value) => newRequest.setFieldValue('priority_id', value)}
                data={props.priorities}
                error={newRequest.errors.priority_id}
                touched={newRequest.touched.priority_id}
              />
            </List>
          </Box>
        </form>
      </div>
      <Toast />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    admins: state.option.admins,
    statuses: state.option.statuses,
    categories: state.option.categories,
    priorities: state.option.priorities
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllStatus: () => {
      dispatch(fetchAllOptionStatus());
    },
    fetchAllCategory: (data) => {
      dispatch(fetchAllOptionCategory(data));
    },
    fetchAllAdmin: (data) => {
      dispatch(fetchAllOptionAdmin(data));
    },
    fetchAllPriority: () => {
      dispatch(fetchAllOptionPriority())
    },
    handleAddNewRequest: (data) => {
      dispatch(addNewRequest(data));
    },
    fetchCateAfterChangeAssign: (data) => {
      dispatch(fetchCategoryAfterHandleChangeAssign(data));
    },
    fetchAssignAfterChangeCategory: (data) => {
      dispatch(fetchAssignAfterHandleChangeCategory(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);
