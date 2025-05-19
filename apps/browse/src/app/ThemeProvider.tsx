import { PropsWithChildren } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // default
      sm: 320, // default
      md: 768, // default
      lg: 1024, // default
      xl: 1440, // default
      // custom example: add "xxl"
      // xxl: 1800,
    },
  },
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
  return (
    <MaterialThemeProvider theme={theme}>
      {props.children}
    </MaterialThemeProvider>
  );
};
