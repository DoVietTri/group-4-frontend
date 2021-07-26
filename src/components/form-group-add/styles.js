import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2, 0)
  },
  title: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold
  },
  input: {
    width: '70%'
  },
  helperText: {
    color: theme.palette.error.main,
    margin: theme.spacing(0, 2)
  }
}));

export default useStyles;
