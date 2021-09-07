import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ForumIcon from '@material-ui/icons/Forum';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import "./HomePage.css"
import Navbar from "./Navbar"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>

      <div>
        <div className="content">
          <h2>Content</h2>
        </div>
      </div>

    </div>
  )
}

export default HomePage