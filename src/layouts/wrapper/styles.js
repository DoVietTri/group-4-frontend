import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    height: '100vh'
  }
}));

export default useStyles;
