import React from 'react';
import {Route, Switch, Redirect, Router} from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";
import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";


const AppRoutes = () => {
  console.log('Rendering AppRoutes')
  return (
    <Switch>
      <Redirect exact from="/" to="/home"></Redirect>
      <Route path='/favorite'>
        <Favorites />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
    </Switch>
  )
};

export default AppRoutes;