import React,{useState} from "react";
import "./Navbar.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { IconButton } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ForumIcon from "@material-ui/icons/Forum";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import FastfoodIcon from "@material-ui/icons/Fastfood";

import ChatIcon from "@material-ui/icons/Chat";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link, NavLink } from "react-router-dom";
import { signout } from "../auth";
import { Redirect } from 'react-router'


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 10),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  IconColor:{
    color: '#ggg'
  },
  selectedItem:{
    color: '#fff',
    backgroundColor:'#000'
  }
}));

export default function MiniDrawer({children}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0)
  const IconName = (index) => {
    const obj = {
      0: (
        
          <Link to='/Grievance'>
            <ForumIcon className="linkIcon"/>
          </Link>
       
      ),
      1: (
        
          <Link to='/Chat'>
            <ChatIcon className="linkIcon"/>
          </Link>
       
      ),
      2: (
        
          <Link to='/AcademicRecord'>
            <EqualizerIcon className="linkIcon"/>
          </Link>
       
      ),
      3: (
        
          <Link to='/Library'>
            <LocalLibraryIcon className="linkIcon"/>
          </Link>
       
      ),
      4: (
        
          <Link to='/Sports'>
            <SportsBaseballIcon className="linkIcon"/>
          </Link>
       
      ),
      5: (
        
          <Link to='/Canteen'>
            <FastfoodIcon className="linkIcon"/>
          </Link>
       
      ),
      6: (
        
          <Link to='/Feedback'>
            <MailIcon className="linkIcon"/>
          </Link>
       
      ),
      7: (
        
          <Link to='/Support'>
            <HelpOutlineIcon className="linkIcon"/>
          </Link>
       
      ),
    }

    return obj[index];
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap> */}
          <div className='horizontalBar'>
            <ul className='horizontalList'>
              <li className='horizontal-navs'>
              <NavLink to="/HomePage">Dashboard</NavLink>
              </li>
              <li className='horizontal-navs'>
                <NavLink to="/Notice">Notice</NavLink>
              </li>
              <li className='horizontal-navs'>
                <NavLink to="/Violations">Violations</NavLink>
              </li>
              <li className='horizontal-navs'>
                <span onClick={() => signout(() => {console.log('signed out sucessfully')})}>
                  <Link to='/signin'>Signout</Link>
                </span>
              </li>
            </ul>
          </div>
          {/* </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            'Grievance',
            'Chat',
            'Academic Record',
            'Library',
            'Sports Equipment',
            'Canteen',
            'Feedback',
            'Support',
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedItem === index}
              classes={{ selected: selectedItem }}
            >
              <IconButton onClick={() => setSelectedItem(index)}>
                <ListItemIcon>{IconName(index)}</ListItemIcon>
              </IconButton>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
    </div>
  )
}
