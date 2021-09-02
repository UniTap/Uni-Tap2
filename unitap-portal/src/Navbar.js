import React from 'react'
import "./Navbar.css"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ForumIcon from '@material-ui/icons/Forum';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import FastfoodIcon from '@material-ui/icons/Fastfood';

function Navbar() {
  return (
    <div>
      <div className="horizontalBar">
        <ul className="horizontalList">
          <li className="horizontal-navs">Dashboard</li>
          <li className="horizontal-navs">Notice</li>
          <li className="horizontal-navs">Violations</li>
          <li className="horizontal-navs">Uni-Tap Support</li>
        </ul>
      </div>

      <div className="Pagedivde">
        <div className="verticalBar">
          <ul className="verticalList">
            <li className="vertical-navs">Grievance</li>
            <li className="vertical-navs">Chat</li>
            <li className="vertical-navs">Academic Record</li>
            <li className="vertical-navs">Library</li>
            <li className="vertical-navs">Sports Equipment</li>
            <li className="vertical-navs">Canteen</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
