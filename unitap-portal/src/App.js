import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Noticepage from './Noticepage'
import Profilepage from './Profile'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ LoginPage } exact/>
          <Route path="/HomePage" component={ HomePage } exact/>
          <Route path="/Notice" component={ Noticepage } exact/>
          <Route path="/Profile" component={ Profilepage } exact/>
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
