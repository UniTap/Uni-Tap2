import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Noticepage from './Noticepage'
import Profilepage from './Profile'
import Grievance from './Grievance';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import violations from './violations';
//
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ LoginPage } exact/>
          <Route path="/HomePage" component={ HomePage } exact/>
          <Route path="/Notice" component={ Noticepage } exact/>
          <Route path="/Profile" component={ Profilepage } exact/>
          <Route path="/Grievance" component={ Grievance } exact/>
          <Route path="/Violation" component={ violations } exact/>
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
