import React from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const SelectItem = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      className={classes.formControl}
    >
      <InputLabel shrink >{props.title}</InputLabel>
      <Select
        variant="outlined"
        displayEmpty
        value={props.selectValue}
        onChange={(e) => props.handleChangeSelect(e)}
        MenuProps={{
          classes: { paper: classes.menuSelect }
        }}
      >
        {props.children}
      </Select>
    </FormControl>
  )
}

SelectItem.propTypes = {
  formControl: PropTypes.string,
  title: PropTypes.string,
  selectEmpty: PropTypes.string,
  selectRoot: PropTypes.string
}

export default SelectItem;
