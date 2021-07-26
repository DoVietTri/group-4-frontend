import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 4,
    minHeight: '85vh'
  },
  grow: {
    flexGrow: 1
  }
}));

export default useStyles;
