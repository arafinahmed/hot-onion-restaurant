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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/shop">
            <Home></Home>
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
    </div>
  );
}

export default App;
