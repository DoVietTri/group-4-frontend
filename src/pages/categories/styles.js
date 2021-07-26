import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '90%',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2, 10),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: theme.spacing(1)
  },
  action: {
    display: 'flex',
    justifyContent: "space-between"
  },
  search: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5),
    width: '80%',
  },
  table: {
    marginTop: theme.spacing(2)
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center'
  },
  tableRow: {
    '& td': {
      textAlign: 'center'
    },
    '& td:nth-child(1)': {
      width: 50
    },
    '& td:nth-last-child(1)': {
      width: 220
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0)
  }
}));

export default useStyles;
