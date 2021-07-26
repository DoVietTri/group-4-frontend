import { makeStyles } from '@material-ui/core';
import background from '../../assets/images/background-login.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    width: '500px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
    opacity: 0.9,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '300px'
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
