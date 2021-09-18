import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import Noticepage from './pages/Notice/Noticepage';
import Canteen from './pages/Canteen/Canteen';
import Grievance from './pages/Grievance/Grievance';
import Profile from './pages/Profile/Profile';

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
          <Route path='/Canteen' component={Canteen} exact />
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  )
}

export default App;
