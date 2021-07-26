import { makeStyles } from '@material-ui/core/styles';
import { navWidth } from '../../constants';
const useStyles = makeStyles((theme) => ({
  nav: {
    width: navWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  navPaper: {
    width: navWidth,
  },
  drawerOpen: {
    width: navWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  list: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    '& a.MuiListItem-root': {
      textDecoration: 'none'
    },
    '& div.MuiListItemIcon-root,p.MuiTypography-body1': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.common.white
    },
  },
  active: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.light,
    '& div.MuiListItemIcon-root,p.MuiTypography-body1': {
      color: theme.palette.primary.dark,
    }
  },
  toolbar: theme.mixins.toolbar
}));

export default useStyles;
