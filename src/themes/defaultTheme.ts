import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  components: {
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
  },
});
