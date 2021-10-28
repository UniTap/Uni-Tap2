import React from 'react'
import Navbar from "../../../components/Navbar"
import "./NoticeAdmin.css"
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@mui/icons-material/Add';

function NoticeAdmin() {
  return (
    <div>
      <Navbar/>
      <div className="Noticeboard">
        <span className="AddNotice"><div className="Noticebox"> Hello !! Here's a notice<hr /><div className="newNotice"><AddIcon sx = {{fontsize: 40}}/></div></div></span>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
        <div className="Noticebox"> Hello !! Here's a notice <span><GetAppIcon/></span><hr /></div>
      </div>
    </div>
  )
}

export default NoticeAdmin
