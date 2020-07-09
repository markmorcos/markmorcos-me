import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Route, useHistory, useRouteMatch } from 'react-router-dom'

import Websites from './Websites'

const Homepage: React.FC = () => {
  const history = useHistory()
  const match = useRouteMatch()

  return (
    <>
      <Typography variant="h1">Portfolio</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/')}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/portfolio/websites')}
      >
        Websites
      </Button>
      <Route path={'/portfolio/websites'} component={Websites} />
    </>
  )
}

export default Homepage
