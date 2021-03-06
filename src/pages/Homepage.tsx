import { Button, Typography } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { AppContext } from '../hooks'

const Homepage: React.FC = () => {
  const history = useHistory()
  const { setTitle } = useContext(AppContext)
  useEffect(() => setTitle('Home'), [])

  return (
    <>
      <Typography variant="h1">Welcome to my website!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/portfolio')}
      >
        Get started
      </Button>
    </>
  )
}

export default Homepage
