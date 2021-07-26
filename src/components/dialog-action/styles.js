import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 5)
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default useStyles;
