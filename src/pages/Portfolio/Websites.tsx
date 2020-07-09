import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Homepage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <Typography variant="h2">Websites</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/portfolio')}
      >
        Back
      </Button>
    </>
  )
}

export default Homepage
