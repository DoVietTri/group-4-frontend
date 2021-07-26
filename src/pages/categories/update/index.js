import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogAction from '../../../components/dialog-action';
import FormGroupAdd from '../../../components/form-group-add';
import { STATUES_CATEGORY } from '../../../constants';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateCateById } from '../../../store/actions/categoryAction';

const Update = (props) => {

  const updateCategory = useFormik({
    initialValues: {
      name: props.categoryDetail ? props.categoryDetail.name : '',
      description: props.categoryDetail ? props.categoryDetail.description : '',
      user_id: props.categoryDetail ? props.categoryDetail.user_id : null,
      status: props.categoryDetail ? props.categoryDetail.status : null,
    },
    enableReinitialize: true,
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
    onSubmit: (values) => {
      props.fetchUpdateCateById(props.categoryDetail.id, values);
      props.setIsOpenDialogEdit(false);
    }
  });

  return (
    <DialogAction
      open={props.isOpenDialogEdit}
      setOpen={(value) => props.setIsOpenDialogEdit(value)}
      title={`Update category #${props.categoryDetail ? props.categoryDetail.id : ''}`}
      action={"Update"}
      handleSubmit={updateCategory.handleSubmit}
    >
      <FormGroupAdd
        label={"Name"}
        type={"text"}
        multiline={false}
        name={"name"}
        value={updateCategory.values.name}
        handleChange={(value) => updateCategory.setFieldValue('name', value)}
        error={updateCategory.touched.name && updateCategory.errors.name}
      />
      <FormGroupAdd
        label={"Description"}
        type={"text"}
        multiline={true}
        rows={3}
        name={"description"}
        value={updateCategory.values.description}
        handleChange={(value) => updateCategory.setFieldValue('description', value)}
        error={updateCategory.touched.description && updateCategory.errors.description}
      />
      <FormGroupAdd
        label={"Assignee"}
        type={"select"}
        data={props.admins}
        name={"user_id"}
        value={updateCategory.values.user_id}
        handleChange={(value) => updateCategory.setFieldValue('user_id', value)}
        error={updateCategory.errors.user_id}
        touched={updateCategory.touched.user_id}
      />
      <FormGroupAdd
        label={"Status"}
        type={"select"}
        data={STATUES_CATEGORY}
        name={"status"}
        value={updateCategory.values.status}
        handleChange={(value) => updateCategory.setFieldValue('status', value)}
        error={updateCategory.errors.status}
        touched={updateCategory.touched.status}
      />
    </DialogAction>
  )
}

Update.propTypes = {
  isOpenDialogEdit: PropTypes.bool,
  setIsOpenDialogEdit: PropTypes.func,
  admins: PropTypes.arrayOf(PropTypes.object),
  categoryDetail: PropTypes.object,
  fetchUpdateCateById: PropTypes.func
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUpdateCateById: (cate_id, data) => {
      dispatch(updateCateById(cate_id, data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Update);
