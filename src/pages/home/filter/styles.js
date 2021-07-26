import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  btnFilter: {
    width: '100%',
    margin: theme.spacing(2, 0),
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  btnAction: {
    margin: theme.spacing(0, 2)
  },
}));

export default useStyles;
