// example code
const { createTheme } = require('@material-ui/core')

const darkviolet = '#6d08a8'
const violet = '#663399'
const lightRed = '#ff847c'
const red = '#e84a5f'
const tan = '#fecea8'
const offBlack = '#2a363b'
const grey = '#747474'

const theme = createTheme({
  palette: {
    primary: {
      main: violet,
    },
    secondary: {
      main: darkviolet,
    },
    common: {
      lightRed,
      red,
      tan,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      fontFamily: 'Philosopher',
      fontStyle: 'italic',
      color: violet,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 500,
      fontFamily: 'Montserrat',
      color: '#fff',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 300,
      fontFamily: 'Montserrat',
      color: violet,
    },
    h4: {
      fontSize: '3rem',
      fontWeight: 700,
      fontFamily: 'Philosopher',
      fontStyle: 'italic',
      color: '#fff',
    },
    h5: {
      fontSize: '2rem',
      fontWeight: 700,
      fontFamily: 'Philosopher',
      fontStyle: 'italic',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem',
      color: grey,
    },
  },
  overrides: {},
})

export default theme
