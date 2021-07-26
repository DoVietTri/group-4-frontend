import React from 'react';
import { FormControl, InputLabel, InputBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const InputItem = (props) => {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
    >
      <InputLabel shrink >{props.title}</InputLabel>
      <InputBase
        name={props.name}
        type={props.type}
        variant="outlined"
        value={props.valueInput}
        onChange={(e) => props.handleChangeInput(e)}
      />
    </FormControl>
  )
}

InputItem.propTypes = {
  formControl: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
}

export default InputItem;
