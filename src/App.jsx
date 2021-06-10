import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Discover from "./pages/Discover";
import FormOffer from "./components/Forms/FormOffer";



function App() {


  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute exact path="/create-offer" component={FormOffer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
      </Switch>
    </div>
  );
}

export default App;
