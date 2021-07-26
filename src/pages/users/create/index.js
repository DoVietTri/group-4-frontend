import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../../../store/actions/userAction';
import FormGroupAdd from '../../../components/form-group-add';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import { STATUSES_USER } from '../../../constants';
import { ROLES_USER } from '../../../constants';
import { GENDER, PHONE_REGEXP } from '../../../constants';

const Create = (props) => {
  const createUser = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      department_id: '',
      role_id: '',
      status: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required !')
        .max(100, 'Less than 100 character !'),
      email: Yup.string()
        .required('Required !')
        .email("Not format email !"),
      phone: Yup.string()
        .matches(PHONE_REGEXP, 'Phone number is not valid')
        .length(10, 'Must be equals 10 digits !'),
      age: Yup.number()
        .required('Required !'),
      gender: Yup.number()
        .required('Required!'),
      department_id: Yup.number()
        .required('Required!'),
      role_id: Yup.number()
        .required('Required!'),
      status: Yup.number()
        .required('Required !')
    }),
    onSubmit: (values, { resetForm }) => {
      props.handleAddNewUser(values);
      resetForm({ values: '' });
      props.setIsOpenDialogAdd(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogAdd}
      setOpen={(value) => props.setIsOpenDialogAdd(value)}
      title={"Add user"}
      handleSubmit={createUser.handleSubmit}
      action={"Add"}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={createUser.values.name}
        handleChange={(value) => createUser.setFieldValue('name', value)}
        error={createUser.touched.name && createUser.errors.name}
      />
      <FormGroupAdd
        label={"Email"}
        type={"text"}
        multiline={false}
        name={"email"}
        value={createUser.values.email}
        handleChange={(value) => createUser.setFieldValue('email', value)}
        error={createUser.touched.email && createUser.errors.email}
      />
      <FormGroupAdd
        label={"Phone number"}
        type={"text"}
        multiline={false}
        name={"phone"}
        value={createUser.values.phone}
        handleChange={(value) => createUser.setFieldValue('phone', value)}
        error={createUser.touched.phone && createUser.errors.phone}
      />
      <FormGroupAdd
        label={"Age"}
        type={"number"}
        multiline={false}
        name={"age"}
        value={createUser.values.age}
        handleChange={(value) => createUser.setFieldValue('age', value)}
        error={createUser.touched.age && createUser.errors.age}
      />
      <FormGroupAdd
        label={"Gender"}
        type={"select"}
        data={GENDER}
        name={"gender"}
        value={createUser.values.gender}
        handleChange={(value) => createUser.setFieldValue('gender', value)}
        error={createUser.errors.gender}
        touched={createUser.touched.gender}
      />
      <FormGroupAdd
        label={"Department"}
        type={"select"}
        data={props.departments}
        name={"department_id"}
        value={createUser.values.department_id}
        handleChange={(value) => createUser.setFieldValue('department_id', value)}
        error={createUser.errors.department_id}
        touched={createUser.touched.department_id}
      />
      <FormGroupAdd
        label={"Role"}
        type={"select"}
        data={ROLES_USER}
        name={"role_id"}
        value={createUser.values.role_id}
        handleChange={(value) => createUser.setFieldValue('role_id', value)}
        error={createUser.errors.role_id}
        touched={createUser.touched.role_id}
      />
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        data={STATUSES_USER}
        disable={true}
        name={"status"}
        value={createUser.values.status}
        handleChange={(value) => createUser.setFieldValue('status', value)}
        error={createUser.errors.status}
        touched={createUser.touched.status}
      />
    </DialogAction>
  )
}

Create.propTypes = {
  isOpenDialogAdd: PropTypes.bool,
  setIsOpenDialogAdd: PropTypes.func,
  departments: PropTypes.arrayOf(PropTypes.object)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddNewUser: (data) => {
      dispatch(addNewUser(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Create);
