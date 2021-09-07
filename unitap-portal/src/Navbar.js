import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ForumIcon from '@material-ui/icons/Forum';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import "./Navbar.css"

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// export default 
function Navbar(){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    const check = document.getElementById("verticalList");
    console.log("HI")
    if(check.classList.contains("hide")===false){
      check.classList.add("hide");
    }
    else{
      check.classList.remove("hide");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    const check = document.getElementById("verticalList");
    console.log("HI")
    if(check.classList.contains("hide")===false){
      check.classList.add("hide");
    }
    else{
      check.classList.remove("hide");
    }
  };

  return (
    <div>
      <div className="horizontalBar">
        <ul className="horizontalList">
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <MenuIcon/>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <HelpOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary='Grievance' />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ForumIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <EqualizerIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Academic Record" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <LibraryBooksIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <SportsBaseballIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sports Equipment" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <FastfoodIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Canteen" />
            </StyledMenuItem>
          </StyledMenu>

          <li className="horizontal-navs">Dashboard</li>
          <li className="horizontal-navs">Notice</li>
          <li className="horizontal-navs">Violations</li>
          <li className="horizontal-navs">Uni-Tap Support</li>
        </ul>
      </div>

      <div className="verticalBar">
        <ul className="verticalList" id="verticalList">
          <li className="vertical-navs"><HelpOutlineIcon/></li>
          <li className="vertical-navs"><ForumIcon/></li>
          <li className="vertical-navs"><EqualizerIcon/></li>
          <li className="vertical-navs"><LibraryBooksIcon/></li>
          <li className="vertical-navs"><SportsBaseballIcon/></li>
          <li className="vertical-navs"><FastfoodIcon/></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar