import "./App.css";

import React from "react";

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Edit from "./components/Edit";
import Add from "./components/Add";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
