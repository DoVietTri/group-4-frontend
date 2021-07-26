import React from 'react';
import { ListItem, ListItemText, Typography, Select, MenuItem, FormHelperText, TextField } from '@material-ui/core';
import useStyles from './styles';

const ItemAddRequest = (props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.boxDetailItem} >
      <ListItemText
        primary={<Typography variant="body1" className={classes.bold} >{props.label}</Typography>}
        className={classes.titleItem}
      />
      <ListItemText
        className={classes.valueItem}
      >
        {props.select === true ? (<>
          <Select
            variant="outlined"
            className={classes.selectBox}
            disabled={props.disable}
            displayEmpty
            MenuProps={{
              classes: { paper: classes.menuSelect }
            }}
            name={props.name}
            value={props.value || ''}
            onChange={(e) => props.handleChange(e.target.value)}
          >
            <MenuItem value="" ><em>{props.label}</em></MenuItem>
            {props.data.map(item => {
              return (
                <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem>
              )
            })}
          </Select>
          {props.touched && props.error && (
            <FormHelperText className={classes.helperText} >{props.error}</FormHelperText>
          )}
        </>) : (
          <TextField
            variant="outlined"
            className={classes.selectBox}
            FormHelperTextProps={{
              className: classes.helperText
            }}
            type={props.type}
            name={props.name}
            value={props.value || ''}
            onChange={(e) => props.handleChange(e.target.value)}
            helperText={props.error}
          />
        )}
      </ListItemText>
    </ListItem>
  )
}

export default ItemAddRequest;
