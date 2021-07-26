import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  box: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column'
  },
  grow: {
    flexGrow: 1
  },
  listRequest: {
    flexGrow: 3,
    maxWidth: '80%',
    marginRight: theme.spacing(1),
    padding: theme.spacing(1, 2)
  },
  title: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold
  },
  container: {
    flexGrow: 1,
    maxHeight: '75%'
  },
  paper: {
    maxHeight: '95%',
  },
  table: {
    width: '100%',
    height: '60%',
    '& thead tr th': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 0)
  }
}));

export default useStyles;
