import React from "react";
import Navbar from "./Navbar";
import "./Profile.css";
import profilepic from "./profilepic.png"

  function Profile() {
    return (
      <div>
      <Navbar />
      <div className="k">
        <div className="kwrapper">
        <div className="kleft">
        <img src={profilepic} alt="" srcset="" />
        <h4>Alex William</h4>
        <p>UI Developer</p>
          </div>
          <div className="kright">

            <div className="kinfo">
              <h3>Information</h3>
              <div className="kinfo_data">
                <div className="kdata">
                  <h4>Name</h4>
                  <p>Kanav Sharma</p>
                </div>
                <div className="kdata">
                  <h4>Email</h4>
                  <p>kanav@gmail.com</p>
                </div>
                <div className="kdata">
                  <h4>Branch</h4>
                  <p>BTech CSE</p>
                </div>
                <div className="kdata">
                  <h4>Phone</h4>
                  <p>0000-0000-846516</p>
                </div>
              </div>
            </div>
            
            <div className="kprojects">
              <h3>Projects</h3>
              <div className="kproject_data">
                <div className="kdata">
                  <h4>Recent</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="kdata">
                  <h4>Most Viewed</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Profile;
