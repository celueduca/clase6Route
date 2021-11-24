import React from 'react'
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const userLocal = localStorage.getItem('auth');
    let isLogin = userLocal ? true : false;
    return (
        <Route {...rest} render={ props => (
            isLogin ? <Component {...props} />
            : <Redirect to="/login" />
        ) }> 
        </Route>
    )
}

export default PrivateRoute
