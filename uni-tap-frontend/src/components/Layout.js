import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import theme from './theme'

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
