import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import FormGroupAdd from '../../../components/form-group-add';
import { GENDER, ROLES_USER, PHONE_REGEXP } from '../../../constants';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateUserById } from '../../../store/actions/userAction';

const Update = (props) => {
  const updateUser = useFormik({
    initialValues: {
      name: props.userDetail ? props.userDetail.name : '',
      email: props.userDetail ? props.userDetail.email : '',
      phone: props.userDetail ? props.userDetail.phone : '',
      age: props.userDetail ? props.userDetail.age : null,
      gender: props.userDetail ? props.userDetail.gender : null,
      department_id: props.userDetail ? props.userDetail.department_id : null,
      role_id: props.userDetail ? props.userDetail.role_id : null,
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
        .required('Required!')
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      props.fetchUpdateUserById(props.userDetail.id, values);
      props.setIsOpenDialogEdit(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogEdit}
      setOpen={(value) => props.setIsOpenDialogEdit(value)}
      title={`Update user #${props.userDetail ? props.userDetail.id : ''}`}
      action={"Update"}
      handleSubmit={updateUser.handleSubmit}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={updateUser.values.name}
        handleChange={(value) => updateUser.setFieldValue('name', value)}
        error={updateUser.touched.name && updateUser.errors.name}
      />
      <FormGroupAdd
        label={"Email"}
        type={"text"}
        multiline={false}
        name={"email"}
        value={updateUser.values.email}
        handleChange={(value) => updateUser.setFieldValue('email', value)}
        error={updateUser.touched.email && updateUser.errors.email}
      />
      <FormGroupAdd
        label={"Phone number"}
        type={"text"}
        multiline={false}
        name={"phone"}
        value={updateUser.values.phone}
        handleChange={(value) => updateUser.setFieldValue('phone', value)}
        error={updateUser.errors.phone && updateUser.errors.phone}
      />
      <FormGroupAdd
        label={"Age"}
        type={"number"}
        multiline={false}
        name={"age"}
        value={updateUser.values.age}
        handleChange={(value) => updateUser.setFieldValue('age', value)}
        error={updateUser.touched.age && updateUser.errors.age}
      />
      <FormGroupAdd
        label={"Gender"}
        type={"select"}
        data={GENDER}
        name={"gender"}
        value={updateUser.values.gender}
        handleChange={(value) => updateUser.setFieldValue('gender', value)}
        error={updateUser.errors.gender}
        touched={updateUser.touched.gender}
      />
      <FormGroupAdd
        label={"Department"}
        type={"select"}
        data={props.departments}
        name={"department_id"}
        value={updateUser.values.department_id}
        handleChange={(value) => updateUser.setFieldValue('department_id', value)}
        error={updateUser.errors.department_id}
        touched={updateUser.touched.department_id}
      />
      <FormGroupAdd
        label={"Role"}
        type={"select"}
        data={ROLES_USER}
        name={"role_id"}
        value={updateUser.values.role_id}
        handleChange={(value) => updateUser.setFieldValue('role_id', value)}
        error={updateUser.errors.role_id}
        touched={updateUser.touched.role_id}
      />
    </DialogAction>
  )
}

Update.propTypes = {
  isOpenDialogEdit: PropTypes.bool,
  setIsOpenDialogEdit: PropTypes.func,
  userDetail: PropTypes.object,
  fetchUpdateUserById: PropTypes.func
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUpdateUserById: (user_id, data) => {
      dispatch(updateUserById(user_id, data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Update);
