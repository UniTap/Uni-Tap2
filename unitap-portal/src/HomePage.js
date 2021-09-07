import React from 'react'
import "./HomePage.css"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>
      <div className="content">
        
      </div>
    </div>
  )
}

export default HomePage