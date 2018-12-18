import React, { useState } from 'react'
import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Home from './containers/Home'
import ChartsContainer from './containers/ChartsContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
})

const App = ({ classes }) => {
  const [open, handleDrawer] = useState(true)
  return (
    <div>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar disableGutters={open} className={classNames(classes.appBar, open && classes.appBarShift)}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={() => handleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open} classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}>
        <div>
          <IconButton onClick={() => handleDrawer(!open)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemText primary='Dashboard' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Orders' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Customers' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Reports' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Integrations' />
            </ListItem>
          </div>
        </List>
      </Drawer>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Charts'>Bar Chart</Link>
            </li>
          </ul>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/Charts' component={ChartsContainer} />
        </div>
      </Router>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(App)
