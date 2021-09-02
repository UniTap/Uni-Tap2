import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ LoginPage } exact/>
          <Route path="/HomePage" component={ HomePage } exact/>
        </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
