import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

class Routes extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </main>
            </Router>
        )
    }
}

export default Routes;