export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
      light: '#f5f5f5',
      contrastText: '#fbfafa',
    },
    secondary: {
      main: 'rgba(255,255,255,0.09)',
    },
    divider: 'rgba(0,0,0,0.02)',
    info: {
      main: '#b75aff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 13,
    body2: {
      fontFamily: 'Montserrat',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
    h1: {
      fontWeight: 1000,
    },
    h2: {
      fontWeight: 1000,
    },
  },
  props: {
    MuiButtonBase: {},
  },
  shape: {
    borderRadius: 10,
    elevation: 0,
    color: '#fff',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 10,
        boxShadow: '0px 18px 27px -14px rgba(0, 0, 0, 0.16) !important',
      },
      textPrimary: {
        color: '#fff',
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 18px 27px -14px rgba(0, 0, 0, 0.16) !important',
      },
    },
    MuiFab: {
      root: {
        boxShadow: '0px 18px 27px -14px rgba(0, 0, 0, 0.16) !important',
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: '0px 18px 15px -14px rgba(0, 0, 0, 0.05) !important',
        borderRadius: 10
      },
    },
  },
};