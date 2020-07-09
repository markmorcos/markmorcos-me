import { Box, Container } from '@material-ui/core'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import { AppContext } from './hooks'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'

const Routes: React.FC = () => {
  const [title, setTitle] = useState('')

  return (
    <AppContext.Provider value={{ title, setTitle }}>
      <BrowserRouter>
        <Box display="flex" flexDirection="column">
          <Header>
            <Box flexGrow={1}>
              <Container>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route path="/portfolio" component={Portfolio} />
                </Switch>
              </Container>
            </Box>
          </Header>
          <Footer />
        </Box>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
export default Routes
