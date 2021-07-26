/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { addNewCate } from '../../../store/actions/categoryAction';
import FormGroupAdd from '../../../components/form-group-add';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import { STATUES_CATEGORY } from '../../../constants';

const Create = (props) => {

  const createCategory = useFormik({
    initialValues: {
      name: '',
      description: '',
      user_id: '',
      status: 1
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required !')
        .max(100, 'Less than 100 character !'),
      description: Yup.string()
        .required('Required !')
        .max(255, 'Less than 255 character !'),
      user_id: Yup.number()
        .required('Required !'),
      status: Yup.number()
        .required('Required !')
    }),
    onSubmit: (values, { resetForm }) => {
      props.handleAddNewCategory(values);
      resetForm({ values: '' });
      props.setIsOpenDialogAdd(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogAdd}
      setOpen={(value) => props.setIsOpenDialogAdd(value)}
      title={"Add new category"}
      handleSubmit={createCategory.handleSubmit}
      action={"Add"}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={createCategory.values.name}
        handleChange={(value) => createCategory.setFieldValue('name', value)}
        error={createCategory.touched.name && createCategory.errors.name}
      />
      <FormGroupAdd
        label={"Description"}
        type={"text"}
        multiline={true}
        rows={3}
        name={"description"}
        value={createCategory.values.description}
        handleChange={(value) => createCategory.setFieldValue('description', value)}
        error={createCategory.touched.description && createCategory.errors.description}
      />
      <FormGroupAdd
        label={"Assignee"}
        type={"select"}
        data={props.admins}
        name={"user_id"}
        value={createCategory.values.user_id}
        handleChange={(value) => createCategory.setFieldValue('user_id', value)}
        error={createCategory.errors.user_id}
        touched={createCategory.touched.user_id}
      />
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        data={STATUES_CATEGORY}
        name={"status"}
        disable={true}
        value={createCategory.values.status}
        handleChange={(value) => createCategory.setFieldValue('status', value)}
        error={createCategory.errors.status}
        touched={createCategory.touched.status}
      />
    </DialogAction>
  )
}

Create.propTypes = {
  isOpenDialogAdd: PropTypes.bool,
  setIsOpenDialogAdd: PropTypes.func,
  admins: PropTypes.arrayOf(PropTypes.object)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddNewCategory: (data) => {
      dispatch(addNewCate(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Create);
