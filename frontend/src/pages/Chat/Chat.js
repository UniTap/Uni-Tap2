import React from 'react'
import Navbar from '../../components/Navbar'
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import './Chat.css'

function Chat() {
    function open_page_add() {
        const lst_users = document.getElementById("new_user_list");
    
        lst_users.classList.add("show");
    }
    
    function close_page_add() {
        const lst_users = document.getElementById("new_user_list");
    
        lst_users.classList.remove("show");
    }


  return (
    <div>
        <Navbar>
        <div className="container">
            <div className="row no-gutters">
                <div className="col-md-4 border-right">
                    <div className="profile-list">

                        <div className="profile-container">
                            <div className="search-box">
                                <div className="input-wrapper">
                                    {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                                    <input placeholder="Search here" type="text"/>
                                </div> 
                                <div className="addIcon">
                                    <AddIcon onClick={ open_page_add }/>
                                    <ul class="list-users " id="new_user_list">
                                        <button class="add close" onClick={ close_page_add } id="close-useradd">
                                            Close
                                        </button>
                                        <div id="userlist"> 
                                            <li >Name-1</li>
                                            <hr />
                                            <li >Name-2</li>
                                            <hr />
                                            <li >Name-3</li>
                                            <hr />
                                            <li >Name-4</li>
                                            <hr />
                                            <li >Name-5</li>
                                            <hr />
                                            <li >Name-6</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="onlyusers">
                                <div className="friend-drawer friend-drawer--onhover" onclick="myfunctNandan()">
                                    <img className="profile-image" src="" alt=""/>

                                    <div className="text">
                                        <h4>Nandan Shukla</h4>

                                    </div>

                                </div>

                                <hr/>
                            
                                <div className="friend-drawer friend-drawer--onhover" onclick="myfunctAniket()">
                                    <img className="profile-image" src="" alt=""/>
                                    <div className="text">
                                        <h4>Aniket Nadkarni</h4>
                                    </div>

                                </div>

                                <hr/>
                            
                                <div className="friend-drawer friend-drawer--onhover " onclick="myfunctMohit()">
                                    <img className="profile-image" src="" alt=""/>
                                    <div className="text">
                                        <h4>Mohit Shah</h4>
                                    </div>

                                </div>

                                <hr/>
                            
                                <div className="friend-drawer friend-drawer--onhover" onclick="myfunctAryan()">
                                    <img className="profile-image" src="" alt=""/>
                                    <div className="text">
                                        <h4>Aryan Sheth</h4>

                                    </div>

                                </div>

                                <hr/>
                            
                                <div className="friend-drawer friend-drawer--onhover" onclick="myfunctMann()">
                                    <img className="profile-image" src="" alt=""/>
                                    <div className="text">
                                        <h4>Mann Shah</h4>

                                    </div>

                                </div>

                                <hr/>

                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image" src="" alt=""/>
                                    <div className="text">
                                        <h4>More</h4>

                                    </div>

                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>



                <div className="col-md-8">
                    <div className="settings-tray">
                        <div className="friend-drawer no-gutters friend-drawer--grey">
                            <img className="profile-image" src="" alt=""/>
                            <div className="text">
                                <h4 id="profile">Nandan Shukla</h4>
                            </div>
                            <span className="settings-tray--right"></span>
                        </div>
                    </div>
                    <div className="chat-panel">
                        <div className="chatspace">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <div className="chat-bubble chat-bubble--left">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3 offset-md-9">
                                    <div className="chat-bubble chat-bubble--right">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3 offset-md-9">
                                    <div className="chat-bubble chat-bubble--right">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <div className="chat-bubble chat-bubble--left">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <div className="chat-bubble chat-bubble--left">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <div className="chat-bubble chat-bubble--left">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-3 offset-md-9">
                                    <div className="chat-bubble chat-bubble--right">
                                        Hello dude!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="chat-box-tray">
                                    {/* <i className="fa fa-paperclip"></i> */}
                                    <input type="text" placeholder="Type your message here..."/>
                                    {/* <i className="fa fa-microphone" aria-hidden="true"></i> */}
                                    {/* <i className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                                </div>
                                <div className="sendIcon">
                                    <TelegramIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
        </Navbar>
    </div>
  )
}



export default Chat
