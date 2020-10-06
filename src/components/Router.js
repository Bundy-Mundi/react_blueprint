import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "components/Nav";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Products from "routes/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default ({ isLoggedIn }) => {
  
  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn}/>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/profile">
              <Profile/>
            </Route>
            <Route  exact path="/products">
              <Products/>
            </Route>
          </>
        ) : (
          <>
            <Route>
              <Auth exact path="/"/>
            </Route>
            <Redirect from="*" to="/"/>
          </>
          )
        }
      </Switch>
    </Router>
  )
}
