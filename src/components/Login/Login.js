import React, {
    Component
} from 'react';
import './style.css';
import login from '../../services/login';
import Header from '../Header/Header';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            password: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        login(this.state).then((resp) => {
            if (resp.status === 200) {
                let token = resp.data.token;
                localStorage.setItem('token', token);
                this.props.props.history.push('/');
            }
            else {
                alert(resp.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="title">
                        <h1>
                            ¡Bienvenido al módulo de productos de Liverpool!
                        </h1>
                        <hr />
                    </div>
                    <div className="card">
                        <div className="half-card media">
                        </div>
                        <div className="half-card info">
                            <p className="description">
                                Ingresa tu correo y contraseña para ingresar a las herramientas de este módulo
                             </p>
                            <div className="formGroup">
                                <div className="inputGroup">
                                    <label htmlFor="user_name">
                                        <h3>
                                            Usuario
                                         </h3>
                                    </label>
                                    <input type="text" name="user_name" className="telInput" id="telInput" placeholder="ejemplo@liverpool.com" value={this.state.user_name} onChange={this.checkOnInput} />
                                    <label htmlFor="password">
                                        <h3>
                                            Contraseña
                                         </h3>
                                    </label>
                                    <input type="password" name="password" className="telInput" id="telInput" placeholder="" value={this.state.password} onChange={this.checkOnInput} />
                                </div>
                                <button type="button" className="btn" onClick={this.sendNumber}>
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;