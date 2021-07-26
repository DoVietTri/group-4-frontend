import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { CssBaseline, Typography, Avatar, Button, TextField, Chip } from '@material-ui/core';
import useStyles from './styles';
import user from '../../../assets/images/user.png';
import igniz from '../../../assets/images/igniz.jpg';
import { requestDetail, deleteRequest, approveRequest, rejectRequest, updateRequestByAdmin } from '../../../store/actions/requestAction';
import { listAllComment, addComment } from '../../../store/actions/commentAction';
import { handleGetMe } from '../../../store/actions/authAction';
import { fetchAllOptionStatus, fetchAllOptionPriority, fetchAllOptionAdmin } from '../../../store/actions/optionAction';
import { STATUS_REQUEST_OPEN, ROLE_DEPARTMENT, STATUS_REQUEST_CLOSE, ROLE_ADMIN } from '../../../constants';
import {
  KeyboardReturnOutlined,
  UpdateOutlined,
  DeleteOutlineOutlined,
  ThumbUpAltOutlined,
  ThumbDownOutlined
} from '@material-ui/icons';
import Toast from '../../../components/toast';
import CommentSection from './comment-section';
import Wrapper from '../../../layouts/wrapper';
import UpdateByAdmin from './update-by-admin';

const RequestDetail = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { fetchRequestDetail, fetchListAllComment, fetchAllAdmin, fetchAllStatus, fetchAllPriority } = props;
  const [isOpenDialogUpdateByAdmin, setIsOpenDialogUpdateByAdmin] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;

    fetchRequestDetail(id);
    fetchListAllComment(id);
    fetchAllAdmin();
    fetchAllStatus();
    fetchAllPriority();

  }, [props.match.params.id, fetchRequestDetail, fetchListAllComment, fetchAllAdmin, fetchAllStatus, fetchAllPriority]);

  const newComment = useFormik({
    initialValues: {
      content: '',
      request_id: props.match.params.id
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .required("Required !"),
    }),
    onSubmit: (values, { resetForm }) => {
      props.handleAddComment(values);
      resetForm({ values: '' });
    }
  });

  /**
   * Show two button update and delete
   * @returns 
   */
  const showButtonAction = () => {
    return (props.currentUser.id === props.requestDetail.author_id &&
      props.requestDetail.status_id === STATUS_REQUEST_OPEN &&
      props.requestDetail.approve_id === null)
      ? (<>
        <Button
          className={classes.action}
          color="primary"
          variant="contained"
          startIcon={<UpdateOutlined />}
          onClick={() => history.push(`/requests/update/${props.match.params.id}`)}
        >
          Update
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.btnDelete, classes.action)}
          startIcon={<DeleteOutlineOutlined />}
          onClick={() => props.fetchDeleteRequest(props.requestDetail.id)}
        >
          Delete
        </Button>
      </>) : ''
  }

  const showButtonApprove = () => {
    if (props.currentUser.status === STATUS_REQUEST_OPEN &&
      props.requestDetail.approve_id === null &&
      (props.currentUser.id === props.requestDetail.assign_id ||
        (props.currentUser.department_id === props.requestDetail.author.department_id &&
          props.currentUser.role_id === ROLE_DEPARTMENT
        )
      )
    ) {
      return (
        <Button
          variant="contained"
          color="primary"
          startIcon={<ThumbUpAltOutlined />}
          className={clsx(classes.action)}
          onClick={() => props.fetchApproveRequest(props.match.params.id)}
        >
          Approve
        </Button>
      )
    }
  }

  const showButtonReject = () => {
    if (
      (props.requestDetail.status_id !== STATUS_REQUEST_CLOSE) &&
      (props.currentUser.id === props.requestDetail.assign_id ||
        (props.currentUser.department_id === props.requestDetail.author.department_id &&
          props.currentUser.role_id === ROLE_DEPARTMENT))
    ) {
      return (
        <Button
          variant="contained"
          startIcon={<ThumbDownOutlined />}
          className={clsx(classes.action, classes.return)}
          onClick={() => props.fetchRejectRequest(props.match.params.id)}
        >
          Reject
        </Button>
      )
    }
  }

  const showButtonChangeByAdmin = () => {
    if (props.requestDetail.status_id !== STATUS_REQUEST_CLOSE &&
      props.currentUser.id === props.requestDetail.assign_id &&
      props.currentUser.role_id === ROLE_ADMIN
    ) {
      return (
        <Button
          className={classes.action}
          color="primary"
          variant="contained"
          startIcon={<UpdateOutlined />}
          onClick={() => setIsOpenDialogUpdateByAdmin(true)}
        >
          Change
        </Button>
      )
    }
  }

  return (
    <Wrapper>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.top} >
          <Typography
            variant="h5"
          >
            {props.requestDetail.name}
          </Typography>
          <Chip
            className={classes.status}
            label={props.requestDetail.status ? props.requestDetail.status.name : ''}
          />
          <div className={classes.grow} />
          <Button
            variant="contained"
            className={clsx(classes.action, classes.return)}
            startIcon={<KeyboardReturnOutlined />}
            onClick={() => history.goBack()}
          >
            Return
          </Button>
          {showButtonAction()}
          {showButtonChangeByAdmin()}
          {props.requestDetail.author ? showButtonApprove() : ''}
          {props.requestDetail.author ? showButtonReject() : ''}
        </div>
        <div className={classes.avatar}>
          <Avatar src={user} alt="user" className={classes.large} />
          <div className={classes.caption}>
            <Typography variant="h6" className={classes.avatarName}>{props.requestDetail.author ? props.requestDetail.author.name : ''}</Typography>
            <Typography variant="caption" className={classes.date}>{props.requestDetail.created_at}</Typography>
          </div>
        </div>
        <Typography variant='body2' className={classes.description}>
          {props.requestDetail.content}
        </Typography>
        <div className={classes.flexContainer}>
          <Typography variant='h6'><b>Category: </b> {props.requestDetail.category ? props.requestDetail.category.name : ''}</Typography>
          <Typography variant='h6' className={classes.assignee}><b>Assignee: </b></Typography>
          <Avatar src={igniz} alt="Igniz" className={classes.small} />
          <Typography variant="h6" className={classes.assigneeName}>{props.requestDetail.assign ? props.requestDetail.assign.name : ''}</Typography>
        </div>
        <div className={classes.grow} />
        <CommentSection
          listAllComment={props.listAllComment}
        />
        <form onSubmit={newComment.handleSubmit}>
          <TextField
            placeholder="Write a comment"
            variant="outlined"
            className={classes.commentPost}
            FormHelperTextProps={{
              className: classes.helperText
            }}
            type="text"
            name="content"
            value={newComment.values.content}
            onChange={newComment.handleChange}
            helperText={newComment.errors.content}
          />
        </form>
      </div>
      <Toast />
      <UpdateByAdmin
        requestDetail={props.requestDetail}
        open={isOpenDialogUpdateByAdmin}
        setOpen={setIsOpenDialogUpdateByAdmin}
        title={"Update request"}
        action={"Update"}
        statuses={props.statuses}
        priorities={props.priorities}
        admins={props.admins}
        fetchUpdateRequestByAdmin={(requestId, data) => props.fetchUpdateRequestByAdmin(requestId, data)}
      />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    requestDetail: state.request.requestDetail,
    listAllComment: state.comment.listAllComment,
    currentUser: state.auth.user,
    statuses: state.option.statuses,
    admins: state.option.admins,
    priorities: state.option.priorities
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRequestDetail: (id) => {
      dispatch(requestDetail(id))
    },
    fetchListAllComment: (request_id) => {
      dispatch(listAllComment(request_id))
    },
    handleAddComment: (data) => {
      dispatch(addComment(data));
    },
    fetchGetMe: () => {
      dispatch(handleGetMe());
    },
    fetchDeleteRequest: (requestId) => {
      dispatch(deleteRequest(requestId));
    },
    fetchApproveRequest: (requestId) => {
      dispatch(approveRequest(requestId));
    },
    fetchRejectRequest: (requestId) => {
      dispatch(rejectRequest(requestId));
    },
    fetchAllAdmin: () => {
      dispatch(fetchAllOptionAdmin());
    },
    fetchAllStatus: () => {
      dispatch(fetchAllOptionStatus());
    },
    fetchAllPriority: () => {
      dispatch(fetchAllOptionPriority());
    },
    fetchUpdateRequestByAdmin: (requestId, data) => {
      dispatch(updateRequestByAdmin(requestId, data));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetail);
