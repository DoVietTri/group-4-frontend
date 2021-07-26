import React from 'react';
import { connect } from 'react-redux';
import { addNewDept } from '../../../store/actions/departmentAction';
import FormGroupAdd from '../../../components/form-group-add';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import { STATUSES_DEPARTMENT } from '../../../constants';

const Create = (props) => {
  const createDepartment = useFormik({
    initialValues: {
      name: '',
      description: '',
      department_code: '',
      status: 1
    },
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
    onSubmit: (values, { resetForm }) => {
      props.handleAddNewDepartment(values);
      resetForm({ values: '' });
      props.setIsOpenDialogAdd(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogAdd}
      setOpen={(value) => props.setIsOpenDialogAdd(value)}
      title={"Add new department"}
      handleSubmit={createDepartment.handleSubmit}
      action={"Add"}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={createDepartment.values.name}
        handleChange={(value) => createDepartment.setFieldValue('name', value)}
        error={createDepartment.touched.name && createDepartment.errors.name}
      />
      <FormGroupAdd
        label={"Description"}
        type={"text"}
        multiline={true}
        rows={3}
        name={"description"}
        value={createDepartment.values.description}
        handleChange={(value) => createDepartment.setFieldValue('description', value)}
        error={createDepartment.touched.description && createDepartment.errors.description}
      />
      <FormGroupAdd
        label={"Department code"}
        type={"text"}
        multiline={false}
        name={"department_code"}
        value={createDepartment.values.department_code}
        handleChange={(value) => createDepartment.setFieldValue('department_code', value)}
        error={createDepartment.touched.department_code && createDepartment.errors.department_code}
      />
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        data={STATUSES_DEPARTMENT}
        name={"status"}
        disable={true}
        value={createDepartment.values.status}
        handleChange={(value) => createDepartment.setFieldValue('status', value)}
        error={createDepartment.errors.status}
        touched={createDepartment.touched.status}
      />
    </DialogAction>
  )
}

Create.propTypes = {
  isOpenDialogAdd: PropTypes.bool,
  setIsOpenDialogAdd: PropTypes.func,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddNewDepartment: (data) => {
      dispatch(addNewDept(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Create);
