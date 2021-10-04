import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import Noticepage from './pages/Notice/Noticepage';
import Canteen from './pages/Canteen/Canteen';
import Grievance from './pages/Grievance/Grievance';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat'
import Violation from './pages/Violation/violation';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/signin' component={LoginPage} exact />
          <PrivateRoute path='/HomePage' component={HomePage} exact />
          <PrivateRoute path='/Notice' component={Noticepage} exact />
          <PrivateRoute path='/Profile' component={Profile} exact />
          <PrivateRoute path='/Grievance' component={Grievance} exact />
          <PrivateRoute path='/Canteen' component={Canteen} exact />
          <PrivateRoute path='/Chat' component={Chat} exact />
          <PrivateRoute path='/Violation' component={Violation} />
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  )
}

export default App;
