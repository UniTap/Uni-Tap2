import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Glass from './Glass.js'

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Glass/>
    </div>
  );
}

export default App;
