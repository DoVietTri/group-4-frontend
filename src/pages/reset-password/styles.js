import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    fontSize: 20,
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    fontSize: 20,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold
  },
  require: {
    color: theme.palette.error.main,
    fontSize: theme.typography.fontSize,
  },
}));

export default useStyles;
