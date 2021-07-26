import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontSize: 20,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: 20,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold
  },
  require: {
    color: theme.palette.error.main,
    fontSize: theme.typography.fontSize,
    display: 'block'
  },
  btnLoginWithGoogle: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.secondary.light,
    width: '100%',
    fontWeight: theme.typography.fontWeightBold
  },
  iconGoogle: {
    width: '16px !important',
    height: '16px !important'
  },
  forgotPassword: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.primary.main
    }
  }
}));

export default useStyles;
