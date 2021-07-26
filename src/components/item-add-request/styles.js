import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  boxDetailItem: {
    width: '50%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  titleItem: {
    flex: 1,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.between('xs', 'md')]: {
      flex: 1
    }
  },
  valueItem: {
    flex: 5,
    [theme.breakpoints.between('xs', 'md')]: {
      flex: 1
    }
  },
  selectBox: {
    width: '50%',
    [theme.breakpoints.between('xs', 'md')]: {
      width: '100%'
    }
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold
  },
  menuSelect: {
    maxHeight: theme.spacing(45)
  },
  helperText: {
    color: theme.palette.error.main
  }
}));

export default useStyles;
