import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  comment: {
    paddingTop: 70
  },
  commentContainer: {
    height: '60%',
    overflow: 'scroll',
    width: '100%',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
  },
  commentPost: {
    width: '100%',
    paddingTop: theme.spacing(2),
  },
  commentText:{
    paddingLeft:theme.spacing(2),
  },
  helperText: {
    color: theme.palette.error.main
  }
}))

export default useStyles
