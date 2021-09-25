import React from 'react'
import Navbar from "../../components/Navbar";
import "./violation.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';




function violations() {
    return (
        <div>
            <Navbar />

            <div className="myviolations">
                <h1 className="header">
                    <center>My Violations</center>

                </h1>
                <div className="center">
                    <div className="idk">

                        <div >
                            <ul className="tags">

                                <li>

                                    <div className="flip-card">
                                        <div className="flip-card-inner">

                                            <div className="flip-card-front">
                                                <h1><LocalLibraryIcon /></h1>
                                                <h2 className="headex">Library Violations</h2>
                                            </div>
                                            <div class="flip-card-back">
                                                <h1>Library Violations</h1>
                                                <button class="button"><span>Show </span></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>

                                    <div className="flip-card">
                                        <div className="flip-card-inner">

                                            <div className="flip-card-front">
                                                <h1><SportsBaseballIcon /></h1>
                                                <h2 className="headex"> Sports Equipment Violations</h2>
                                                


                                            </div>
                                            <div class="flip-card-back" >
                                                <h1>Sports Equipment Violations</h1>
                                                <button class="button"><span>Show </span></button>

                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>

                                    <div className="flip-card">

                                        <div className="flip-card-inner">

                                            <div className="flip-card-front">
                                                <h1><FastfoodIcon /></h1>
                                                <h2 className="headex"> Canteen Violations</h2>
                                            </div>
                                            <div class="flip-card-back">
                                                <h1>Canteen Violations</h1>
                                                <button class="button"><span>Show </span></button>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li>

                                    <div className="flip-card">
                                        <div className="flip-card-inner">

                                            <div className="flip-card-front">
                                                <h1><CalendarTodayIcon /></h1>
                                                <h2 className="headex">Academic Violations</h2>

                                            </div>
                                            <div class="flip-card-back">
                                                <h1>Academic Violations</h1>
                                                <button class="button"><span>Show </span></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >

                                    <div className="flip-card">
                                        <div className="flip-card-inner">

                                            <div className="flip-card-front">
                                                <h1>< PersonIcon /></h1>
                                                <h2 className="headex">Attendance Violations</h2>

                                            </div>
                                            <div class="flip-card-back">
                                                <h1>Attendance Violations</h1>
                                                <button class="button"><span>Show </span></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}


export default violations