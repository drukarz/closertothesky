import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from "./components/Home";
import FloorPlan from "./components/FloorPlan/FloorPlan";

class App extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (

            <Router>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/floor" component={FloorPlan}/>
                </div>
            </Router>
        );
    }
}

export default App;
