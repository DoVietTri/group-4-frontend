import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  row: {
    '& td': {
      maxWidth: 'calc(100%/6)'
    },
    '& td p': {
      width: 150
    }
  }
}));

export default useStyles;
