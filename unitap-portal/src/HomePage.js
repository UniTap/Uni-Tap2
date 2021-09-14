import React from 'react'
import "./HomePage.css"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>
      <div className="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptates placeat cum ratione consequatur. Repellendus, recusandae autem. Perspiciatis numquam repellendus, est quaerat minima consequuntur sit expedita, similique voluptatem aut autem?
      </div>
    </div>
  )
}

export default HomePage