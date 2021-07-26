import { createMuiTheme } from '@material-ui/core/styles';
import { grey, deepOrange, yellow, lightBlue, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      light: '#6fbfa8',
      main: '#4caf93',
      dark: '#357a66',
      contrastText: '#fff'
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[600],
      contrastText: '#fff'
    },
    error: {
      light: deepOrange[100],
      main: deepOrange[300],
      dark: deepOrange[600],
      contrastText: '#fff'
    },
    warning: {
      light: yellow[100],
      main: yellow[300],
      dark: yellow[600],
      contrastText: '#fff'
    },
    info: {
      light: lightBlue[100],
      main: lightBlue[300],
      dark: lightBlue[600],
      contrastText: '#fff'
    },
    success: {
      light: green[100],
      main: green[300],
      dark: green[600],
      contrastText: '#fff'
    }
  },
  shape: {
    borderRadius: 4
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: 10,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "#ddd",

        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: grey[400],
        },
      },
    },
  },
});

export default theme;
