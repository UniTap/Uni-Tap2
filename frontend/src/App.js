import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import Noticepage from './pages/Notice/Noticepage';
import Canteen from './pages/Canteen/Canteen';
import Library from './pages/Library/Library';
import Sports from './pages/Sports/Sports';
import Grievance from './pages/Grievance/Grievance';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat'
import Violation from './pages/Violation/violation'

import NoticeAdmin from './pages/Admin/NoticeAdmin/NoticeAdmin';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <Route path='/HomePage' component={HomePage} exact />
          <Route path='/Notice' component={Noticepage} exact />
          <Route path='/Profile' component={Profile} exact />
          <Route path='/Grievance' component={Grievance} exact />
          <Route path='/Library' component={Library} exact />
          <Route path='/Sports' component={Sports} exact />
          <Route path='/Canteen' component={Canteen} exact />
          <Route path='/Chat' component={Chat} exact />
          <Route path='/Violations' component={Violation} exact />
          <Route path='/NoticeAdmin' component={NoticeAdmin} exact />
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  )
}

export default App;
