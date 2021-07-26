import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
    '& div.MuiInputBase-root': {
      marginTop: theme.spacing(2),
      border: `1px solid ${theme.palette.grey[400]}`,
      padding: theme.spacing(0, 1),
      borderRadius: theme.shape.borderRadius
    }
  },
}));

export default useStyles;
