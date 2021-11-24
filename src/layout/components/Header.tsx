import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import useAuth from "../../hook/useAuth";

const Header = () => {

    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }

    return (
        <header>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/config">Configuracion</Link></li>
                { Object.keys(user).length > 0 ? (
                    <li onClick={ () => exit() }>Salir</li>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                ) }
                
            </ul>
            { Object.keys(user).length > 0 ? (
                <p>Bienvenido { user.username }</p>
            ) : (
                <p>Por favor Ingresa al sistema</p>
            ) }
            
        </header>
    )
}

export default Header
