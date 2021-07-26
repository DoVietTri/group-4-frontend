import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    minHeight: '90%',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2, 10),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius
  },
  grow: {
    flexGrow: 1
  },
  header: {
    display: 'flex'
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  requestTitle: {
    width: '100%',
    margin: theme.spacing(5, 0)
  },
  box: {
    border: `1px solid ${theme.palette.secondary.main}`,
    minHeight: '60vh',
    padding: theme.spacing(3, 5)
  },
  boxDetail: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  helperText: {
    color: theme.palette.error.main
  },
  return: {
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default useStyles;
