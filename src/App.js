import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button} from 'primereact/button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import UserRegistration from './components/users/userRegistration';
import Layout from "./components/layout";

class App extends Component {
    
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }
    
    increment() {
        this.setState({count: this.state.count + 1});
    }
    
    render() {
        return (
         /* <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Closer to the Sky</h2>
            </div>
            <div className="App-intro">
              <Button label="Click" icon="pi pi-check" onClick={this.increment} />
              
              <p>Number of Clicks: {this.state.count}</p>
            </div>
          </div>*/

            <Router>
                <div className="container">
                    <Route exact path="/" component={Layout} />
                    <Route path="/registration" component={UserRegistration} />
                </div>
            </Router>


        );
    }
}

export default App;
