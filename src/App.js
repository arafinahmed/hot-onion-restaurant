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
import Cart from './Components/Cart/Cart';
import LastPage from './Components/LastPage/LastPage';
import HeadHome from './Components/HeadHome/HeadHome';
import FakeCart from './Components/FakeCart/FakeCart';


function App(props) {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          
          <Route path="/shop">
          <HeadHome></HeadHome>
            <Home></Home>
          </Route>
         
          <Route path="/signin">
          <HeadHome></HeadHome>
              <SignIn></SignIn>
          </Route>
          <Route path="/signup">
          <HeadHome></HeadHome>
              <SignUp></SignUp>
          </Route>
          <Route path="/cart">
          <HeadHome></HeadHome>
            <Cart></Cart>
          </Route>
          <Route path="/fakecart">
            <HeadHome></HeadHome>
            <FakeCart></FakeCart>
          </Route>
          <Route path="/lastpage">
          <HeadHome></HeadHome>
            <LastPage></LastPage>
          </Route>
          <Route path="/:key">
          <HeadHome></HeadHome>
              <SingleItem></SingleItem>
          </Route>
          <Route exact path="/">
          <HeadHome></HeadHome>
            <Home></Home>
          </Route>
          <Route path="*">
          <HeadHome></HeadHome>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>   
      </AuthProvider>
    </div>
  );
}

export default App;
