import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/Homepage'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Box display="flex" flexDirection="column">
      <Header />
      <Box flexGrow={1}>
        <Container>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Container>
      </Box>
      <Footer />
    </Box>
  </BrowserRouter>
)

export default Routes
