import React, { Component } from "react";
import Nav from "./components/nav";
import "./App.css";
import Counters from "./components/counters";
import react from "react";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <main className="container">
                    <Counters />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
