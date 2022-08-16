import logo from './logo.svg';
import './App.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import { useContext } from "react";
import { UserContext } from './context/userContext/UserContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);
  // console.log("inside app.js", user);
  return (
    //<Login/>
    //<Register/>
    // <Watch />

    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/watch">
          <Watch />
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/series">
          {user ? <Home type="series" /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/movies">
          {user ? <Home type="movies" /> : <Redirect to="/login" />}
        </Route>
        
      </Switch>
    </Router>

  )
}

export default App;
