import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  commentText: {
    paddingLeft: theme.spacing(2),
  },
  commentItem: {
    border: `1px solid ${theme.palette.secondary.main}`,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 0)
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
}))

export default useStyles
