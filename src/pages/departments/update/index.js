import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import FormGroupAdd from '../../../components/form-group-add';
import { STATUSES_DEPARTMENT } from '../../../constants';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateDeptById } from '../../../store/actions/departmentAction'

const Update = (props) => {
  const updateDepartment = useFormik({
    initialValues: {
      name: props.departmentDetail ? props.departmentDetail.name : '',
      description: props.departmentDetail ? props.departmentDetail.description : '',
      status: props.departmentDetail ? props.departmentDetail.status : null,
      department_code: props.departmentDetail ? props.departmentDetail.department_code : '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required !')
        .min(5, 'Must be greater than or equals 5 character !')
        .max(50, 'Less than 50 character !'),
      description: Yup.string()
        .required('Required !')
        .max(255, 'Less than 255 character !'),
      department_code: Yup.string()
        .required('Required!'),
      status: Yup.number()
        .required('Required !')
    }),
    onSubmit: (values) => {
      props.fetchUpdateDeptById(props.departmentDetail.id, values);
      props.setIsOpenDialogEdit(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogEdit}
      setOpen={(value) => props.setIsOpenDialogEdit(value)}
      title={`Update department #${props.departmentDetail ? props.departmentDetail.id : ''}`}
      action={"Update"}
      handleSubmit={updateDepartment.handleSubmit}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={updateDepartment.values.name}
        handleChange={(value) => updateDepartment.setFieldValue('name', value)}
        error={updateDepartment.touched.name && updateDepartment.errors.name}
      />
      <FormGroupAdd
        label={"Description"}
        type={"text"}
        multiline={true}
        rows={3}
        name={"description"}
        value={updateDepartment.values.description}
        handleChange={(value) => updateDepartment.setFieldValue('description', value)}
        error={updateDepartment.touched.description && updateDepartment.errors.description}
      />
      <FormGroupAdd
        label={"Department code"}
        type={"text"}
        multiline={false}
        name={"department_code"}
        value={updateDepartment.values.department_code}
        handleChange={(value) => updateDepartment.setFieldValue('department_code', value)}
        error={updateDepartment.touched.department_code && updateDepartment.errors.department_code}
      />
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        data={STATUSES_DEPARTMENT}
        name={"status"}
        value={updateDepartment.values.status}
        handleChange={(value) => updateDepartment.setFieldValue('status', value)}
        error={updateDepartment.errors.status}
        touched={updateDepartment.touched.status}
      />
    </DialogAction>
  )
}

Update.propTypes = {
  isOpenDialogEdit: PropTypes.bool,
  setIsOpenDialogEdit: PropTypes.func,
  departmentDetail: PropTypes.object,
  fetchUpdateDeptById: PropTypes.func
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUpdateDeptById: (dept_id, data) => {
      dispatch(updateDeptById(dept_id, data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Update);
