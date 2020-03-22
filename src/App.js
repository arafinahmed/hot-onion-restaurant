import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import SingleItem from './Components/SigleItem/SingleItem';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SginIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import {AuthProvider } from './Components/Login/UseAuth';
import Cart from './Cart/Cart';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/shop">
            <Home></Home>
          </Route>
         
          <Route path="/signin">
              <SignIn></SignIn>
          </Route>
          <Route path="/signup">
              <SignUp></SignUp>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/:key">
              <SingleItem></SingleItem>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>   
      </AuthProvider>
    </div>
  );
}

export default App;
