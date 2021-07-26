import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    height: '94%',
    display: 'flex',
    flexDirection: 'column'
  },

  status: {
    backgroundColor: theme.palette.success.dark,
    color: 'white',
    float: 'right',
    marginLeft: theme.spacing(1)
  },
  top: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  btnDelete: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      opacity: 0.7,
      trasition: theme.transitions.easing
    }
  },
  avatar: {
    display: 'flex',
    paddingTop: 20
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  caption: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatarName: {
    paddingLeft: 20,
  },
  date: {
    paddingLeft: 20,
  },
  description: {
    paddingTop: 50,
  },
  flexContainer: {
    display: 'flex',
    paddingTop: 50
  },
  assignee: {
    paddingLeft: 200,
    paddingRight: 20
  },
  assigneeName: {
    paddingLeft: 20
  },
  commentPost: {
    width: '100%',
    paddingTop: theme.spacing(2),
  },
  commentText: {
    paddingLeft: theme.spacing(2),
  },
  helperText: {
    color: theme.palette.error.main
  },
  action: {
    float: 'right',
    marginLeft: theme.spacing(2),
  },
  return: {
    backgroundColor: theme.palette.secondary.main
  }
}))

export default useStyles
