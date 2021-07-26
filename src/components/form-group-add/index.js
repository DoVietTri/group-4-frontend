import React from 'react';
import { FormGroup, Typography, TextField, Select, MenuItem, FormHelperText } from '@material-ui/core';
import useStyles from './styles';
import PropTypes from 'prop-types';

const FormGroupAdd = (props) => {
  const classes = useStyles();

  return (
    <FormGroup
      className={classes.formGroup}
    >
      <Typography
        className={classes.title}
      >
        {props.label}
      </Typography>
      {props.type === 'select' ? (
        <>
          <FormGroup
            className={classes.input}
          >
            <Select
              fullWidth
              variant="outlined"
              displayEmpty
              disabled={props.disable}
              name={props.name}
              value={props.value || ''}
              onChange={(e) => props.handleChange(e.target.value)}
            >
              <MenuItem value=""> <em>{props.label}</em></MenuItem>
              {props.data ? props.data.map(item => {
                return (
                  <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem>
                )
              }) : ''}
            </Select>
            {props.touched && props.error && (
              <FormHelperText className={classes.helperText} >{props.error}</FormHelperText>
            )}
          </FormGroup>
        </>) : (
        <TextField
          variant="outlined"
          type={props.type}
          placeholder={`Enter ${props.label}...`}
          className={classes.input}
          fullWidth
          multiline={props.multiline}
          rows={props.rows}
          name={props.name}
          value={props.value || ''}
          disabled={props.disable}
          onChange={(e) => props.handleChange(e.target.value)}
          helperText={props.error}
          FormHelperTextProps={{
            className: classes.helperText
          }}
        />
      )}
    </FormGroup>
  )
}

FormGroupAdd.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disable: PropTypes.bool,
}

export default FormGroupAdd;
