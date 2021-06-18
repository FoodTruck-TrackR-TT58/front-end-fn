
import './App.css';
import Register from "../src/components/Register";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import ProtectedRoute from "../src/utils/ProtectedRoute";
import Operator from "./components/Operator";
import NewTruck from './components/NewTruck';
import Header from './components/Header';
import Diner from './components/Diner';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
       
          <Route path = "/register" component = {Register} />
          <Route path = "/login" component = {Login} />
          <ProtectedRoute path = "/operator" component={Operator}/>
          <ProtectedRoute path = "/diner" component={Diner}/>
          <ProtectedRoute path = "/newtruck" component={NewTruck}/>
          <Route path = "/" component = {Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 