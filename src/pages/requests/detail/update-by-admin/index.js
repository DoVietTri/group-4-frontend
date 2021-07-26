import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import DialogAction from '../../../../components/dialog-action';
import FormGroupAdd from '../../../../components/form-group-add';

const UpdateByAdmin = (props) => {

  const updateRequestByAdmin = useFormik({
    initialValues: {
      status_id: props.requestDetail ? props.requestDetail.status_id : '',
      assign_id: props.requestDetail ? props.requestDetail.assign_id : '',
      priority_id: props.requestDetail ? props.requestDetail.priority_id: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      status_id: Yup.number().required("Required !"),
      assign_id: Yup.number().required("Required !"),
      priority_id: Yup.number().required("Required !")
    }),
    onSubmit: (values) => {
      props.fetchUpdateRequestByAdmin(props.requestDetail.id, values);
      props.setOpen(false);
    }
  });

  return (
    <DialogAction
      open={props.open}
      setOpen={(value) => props.setOpen(value)}
      title={props.title}
      action={props.action}
      handleSubmit={updateRequestByAdmin.handleSubmit}
    >
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        name={"status_id"}
        value={updateRequestByAdmin.values.status_id}
        handleChange={(value) => updateRequestByAdmin.setFieldValue('status_id', value)}
        data={props.statuses}
        error={updateRequestByAdmin.errors.status_id}
      />
      <FormGroupAdd
        label={"Assign"}
        type={"select"}
        name={"assign_id"}
        value={updateRequestByAdmin.values.assign_id}
        handleChange={(value) => updateRequestByAdmin.setFieldValue('assign_id', value)}
        data={props.admins}
        error={updateRequestByAdmin.errors.assign_id}
      />
      <FormGroupAdd
        label={"Priority"}
        type={"select"}
        name={"priority_id"}
        value={updateRequestByAdmin.values.priority_id}
        handleChange={(value) => updateRequestByAdmin.setFieldValue('priority_id', value)}
        data={props.priorities}
        error={updateRequestByAdmin.errors.priority_id}
      />
    </DialogAction>
  )
}

UpdateByAdmin.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  action: PropTypes.string,
  priorities: PropTypes.arrayOf(PropTypes.object),
  admins: PropTypes.arrayOf(PropTypes.object),
  statuses: PropTypes.arrayOf(PropTypes.object),
  fetchUpdateRequestByAdmin: PropTypes.func
}

export default UpdateByAdmin;
