import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';

const DialogAction = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <form>
        <DialogTitle 
          id="form-dialog-title"
          className={classes.title}
          >
            {props.title}
          </DialogTitle>
        <Divider />
        <DialogContent
          className={classes.root}
        >
          {props.children}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => props.setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={() => props.handleSubmit()}
          >
            { props.action }
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

DialogAction.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  action: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default DialogAction;
