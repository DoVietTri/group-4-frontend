import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
    '& div.MuiInputBase-root': {
      marginTop: theme.spacing(2), 
    },
    '& div.MuiSelect-root': {
      padding: '7.5px 14px'
    }
  },
  menuSelect: {
    maxHeight: theme.spacing(45)
  },
}), { index: 1 });

export default useStyles;
