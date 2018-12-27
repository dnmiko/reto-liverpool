import React, {
    Component
} from 'react';
import './style.css';
import logo from '../../logo.png';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    redirectAdd = () => {
        this.context.history.push('/add');
    }

    render() {
        return (
            <header className="App-nav">
                <img src={logo} className="App-logo" alt="logo" />
                <h5 className="menu-item">
                    Agregar artículo
                </h5>
            </header>
        )
    }
}
export default Nav;