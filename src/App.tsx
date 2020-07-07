import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import React, { useMemo } from 'react'
import { hot } from 'react-hot-loader/root'

import Routes from './Routes'

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createMuiTheme({ palette: { type: prefersDarkMode ? 'dark' : 'light' } }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default hot(App)
