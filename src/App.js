import React, {useEffect} from 'react';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Components/Checkout'
import { auth } from './Firebase';
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Components/Orders';

const promise = loadStripe('pk_test_51HaFEPBV1pCwXuQISTkMaZvIC5EJHv1jNa9pKPBNuO9dRNyE7HUX5EvTJd2Zp7uULqOWTgfBG0CJonMvhOJIeyOU00qI6P2frv');

function App() {
    // eslint-disable-next-line
    const[{}, dispatch] = useStateValue();

    useEffect(() => {
        // runs once when the app component loads
    
        auth.onAuthStateChanged((authUser) => {
          console.log("CURRENT USER: ", authUser);
    
          if (authUser) {
            // the user just logged in / the user was logged in
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
        // eslint-disable-next-line
      }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                          <Elements stripe={promise}>
                            <Payment />
                          </Elements>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
