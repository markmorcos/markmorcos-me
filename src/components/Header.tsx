import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Inbox, Mail, Menu } from '@material-ui/icons'
import React, { useContext, useState } from 'react'

import { AppContext } from '../hooks'

const useStyles = makeStyles((theme) => ({
  menuButton: { marginRight: theme.spacing(2) },
}))

const Header = ({ children }) => {
  const classes = useStyles()
  const { title } = useContext(AppContext)
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  return (
    <Box flexGrow={1}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={setDrawerOpen.bind(this, true)}
          >
            <Menu />
          </IconButton>
          <Box flexGrow={1}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={setDrawerOpen.bind(this, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  )
}

export default Header
