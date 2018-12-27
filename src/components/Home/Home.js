import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import checkToken from '../../resolvers/checkToken';
import payload from '../../resolvers/payload';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    chargeProfile = () => {
        if (checkToken()) {
            const token = localStorage.getItem('token');
            let pl = payload(token);
            return (
                <div></div>
            )
        } else {
            return (
                <Login />
            )
        }
    }

    render() {
        return (
            <div>
                {this.chargeProfile()}
            </div>
        )
    }
}

export default Home;

