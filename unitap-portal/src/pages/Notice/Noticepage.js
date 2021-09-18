import React from 'react'
import Navbar from '../../components/Navbar'
import './Noticepage.css'
import GetAppIcon from '@material-ui/icons/GetApp';

function Noticepage() {
  return (
    <div>
      <Navbar/>
      <div className="Noticeboard">
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
      </div>
    </div>
  )
}

export default Noticepage
