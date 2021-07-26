import { Box, Button, List, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import Wrapper from '../../../layouts/wrapper';
import useStyles from './styles';
import { connect } from 'react-redux';
import { fetchAllOptionStatus, fetchAllOptionCategory, fetchAllOptionAdmin, fetchAllOptionPriority } from '../../../store/actions/optionAction';
import { requestDetail, updateRequest } from '../../../store/actions/requestAction';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Toast from '../../../components/toast';
import ItemAddRequest from '../../../components/item-add-request';
import { useHistory } from 'react-router';
import { KeyboardReturnOutlined, PublishOutlined } from '@material-ui/icons';
import formatDate from '../../../helpers/formatDate';
import { STATUS_ADMIN_ACTIVE, STATUS_CATE_ENABLE } from '../../../constants';

const UpdateRequest = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllPriority, fetchRequestDetail } = props;

  useEffect(() => {
    fetchAllStatus();
    fetchAllCategory({ status: STATUS_CATE_ENABLE });
    fetchAllAdmin({ status: STATUS_ADMIN_ACTIVE });
    fetchAllPriority();
    fetchRequestDetail(props.match.params.id);
  }, [props.match.params.id, fetchAllStatus, fetchAllCategory, fetchAllAdmin, fetchAllPriority, fetchRequestDetail]);

  const updateRequest = useFormik({
    initialValues: {
      name: props.requestDetail.name,
      content: props.requestDetail.content,
      status_id: props.requestDetail.status_id,
      assign_id: props.requestDetail.assign_id,
      category_id: props.requestDetail.category_id,
      due_date: props.requestDetail.due_date,
      priority_id: props.requestDetail.priority_id,
    },
    enableReinitialize: true,
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
      props.fetchUpdateRequest(props.match.params.id, values);
    }
  })

  return (
    <Wrapper >
      <div className={classes.root}>
        <form>
          <div className={classes.header}>
            <Typography
              variant="h5"
              className={classes.title}
            >
              Update request
            </Typography>
            <div className={classes.grow} />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={updateRequest.handleSubmit}
              startIcon={<PublishOutlined />}
            >
              Update
            </Button>
            <Button
              variant="contained"
              className={classes.return}
              startIcon={<KeyboardReturnOutlined />}
              onClick={() => history.goBack()}
            >
              Return
            </Button>
          </div>
          <TextField
            className={classes.requestTitle}
            placeholder={"Title..."}
            variant="outlined"
            type="text"
            FormHelperTextProps={{
              className: classes.helperText
            }}
            name="name"
            value={updateRequest.values.name || ''}
            onChange={updateRequest.handleChange}
            helperText={updateRequest.errors.name}
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
              value={updateRequest.values.content || ''}
              onChange={updateRequest.handleChange}
              helperText={updateRequest.errors.content}
            />
            <List
              className={classes.boxDetail}
            >
              <ItemAddRequest
                label={"Status"}
                name={"status_id"}
                select={true}
                value={updateRequest.values.status_id}
                handleChange={(value) => updateRequest.setFieldValue('status_id', value)}
                data={props.statuses}
                disable={true}
                error={updateRequest.errors.status_id}
              />
              <ItemAddRequest
                label={"Assign"}
                name={"assign_id"}
                select={true}
                value={updateRequest.values.assign_id}
                handleChange={(value) => updateRequest.setFieldValue('assign_id', value)}
                data={props.admins}
                error={updateRequest.errors.assign_id}
              />
              <ItemAddRequest
                label={"Category"}
                name={"category_id"}
                select={true}
                value={updateRequest.values.category_id}
                handleChange={(value) => updateRequest.setFieldValue('category_id', value)}
                data={props.categories}
                error={updateRequest.errors.category_id}
              />
              <ItemAddRequest
                label={"Due date"}
                name="due_date"
                select={false}
                type={"date"}
                value={updateRequest.values.due_date}
                handleChange={(value) => updateRequest.setFieldValue('due_date', value)}
                error={updateRequest.errors.due_date}
              />
              <ItemAddRequest
                label={"Priority"}
                name={"priority_id"}
                select={true}
                value={updateRequest.values.priority_id}
                handleChange={(value) => updateRequest.setFieldValue('priority_id', value)}
                data={props.priorities}
                error={updateRequest.errors.priority_id}
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
    priorities: state.option.priorities,
    requestDetail: state.request.requestDetail,
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
    fetchRequestDetail: (id) => {
      dispatch(requestDetail(id));
    },
    fetchUpdateRequest: (requestId, data) => {
      dispatch(updateRequest(requestId, data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRequest);
