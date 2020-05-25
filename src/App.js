import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Case from "./components/Case/Case";
import HomePage from "./components/Home/HomePage";
import Police from "./components/Polices/Police";
import CasesList from "./components/Cases/CasesList";
import PolicesList from "./components/Polices/PolicesList";
import CaseDone from "./components/Case/CaseDone";

function App() {
    return (
        <div>
            <Home />
            <Switch>
                <Route exact path="/case" component={Case}></Route>
                <Route path="/cases" component={CasesList}></Route>
                <Route path="/polices" component={PolicesList}></Route>
                <Route path="/casedone" component={CaseDone}></Route>
                <Route path="/police" component={Police}></Route>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </div>
    );
}

export default App;
