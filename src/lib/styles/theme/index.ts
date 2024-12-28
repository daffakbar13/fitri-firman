import grey from '@mui/material/colors/grey'
import red from '@mui/material/colors/red'
import createTheme from '@mui/material/styles/createTheme'
import { CSSObject } from '@mui/styled-engine'

import globalStyles from '../globalStyles'

const theme = createTheme({
  palette: {
    background: {
      default: 'white',
    },
    primary: {
      main: '#102447',
    },
    secondary: {
      main: '#C2AD70',
    },
    error: {
      main: red[900],
    },
    text: {
      primary: '#fff',
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 320, md: 375, lg: 425, xl: 768 },
  },
  shape: { borderRadius: 8 },
  typography: {
    allVariants: {
      fontSize: 14,
      color: 'white',
    },
    fontSize: 14,
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small',
      },
      styleOverrides: {
        fontSizeSmall: 16,
        root: { cursor: 'pointer' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: (e) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: e.theme.spacing(2),
          padding: e.theme.spacing(4),
          margin: e.theme.spacing(0.5),
          borderRadius: e.theme.spacing(2),
          overflow: 'scroll',
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: (e) => ({
          width: 360,
          padding: e.theme.spacing(2),
          gap: e.theme.spacing(2),
        }),
      },
    },
    MuiDialogTitle: {
      defaultProps: { color: 'primary.main', align: 'center', fontWeight: 'bold', fontSize: 18 },
      styleOverrides: { root: { padding: 0 } },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: (e) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: e.theme.spacing(2),
          padding: 0,
        }),
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: (e) => ({ textAlign: 'center', fontSize: 16, color: e.theme.palette.text.primary }),
      },
    },
    MuiDialogActions: {
      styleOverrides: { root: { padding: 0, justifyContent: 'start' } },
    },
    MuiCssBaseline: { styleOverrides: { ...(globalStyles as CSSObject) } },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#C2AD70',
          ':before, :after': {
            borderColor: '#C2AD70',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: (e) => ({
          textTransform: 'none',
          borderRadius: e.theme.spacing(4),
          padding: e.theme.spacing(1, 3),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: (e) => ({
          'label + &': {
            marginTop: e.theme.spacing(3),
          },
          '& .MuiInputBase-input': {
            borderRadius: e.theme.shape.borderRadius,
            position: 'relative',
            fontSize: 13,
            width: '100%',
            padding: e.theme.spacing(1, 2),
          },
          '& .Mui-disabled': {
            background: 'rgba(0, 0, 0, 0.11)',
          },
          '& .MuiInputBase-multiline': {
            padding: 0,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'black !important',
          backgroundColor: 'white !important',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: (e) => ({
          color: e.theme.palette.grey[800],
          fontSize: 18,
          fontWeight: 'bold',
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { '& .MuiTypography-root': { fontSize: 13, width: 'max-content' } },
      },
    },
    MuiCheckbox: {
      defaultProps: { size: 'small' },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: 13,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        height: 24,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: (e) => ({
          color: e.theme.palette.error.main,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '& .MuiBox-root': {
            width: 'max-content',
          },
        },
        head: {
          fontWeight: 'bold',
        },
        body: {
          '& .MuiBox-root:empty:before': {
            content: "'-'",
          },
        },
      },
    },
  },
})

export default theme
