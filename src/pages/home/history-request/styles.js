import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  historyRequest: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1, 2),
    maxWidth: '18%'
  },
  title: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold
  },
  content: {
    flexGrow: 1
  },
  itemHistory: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(1, 0)
  },
  author: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0, 1)
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 0)
  },
  flex: {
    display: 'flex'
  }
}));

export default useStyles;
