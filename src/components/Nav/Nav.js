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
                <div className="logo-container" >
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="menu-container">
                    <div className="menu-item">
                        Módulo de administración
                     </div>
                    <div className="menu-item">
                        Artículos agregados
                     </div>
                </div>
            </header>
        )
    }
}
export default Nav;