import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/sign-in">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
