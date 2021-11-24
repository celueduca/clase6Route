import React, { useState, useEffect } from 'react'
import { User } from '../interfaces/User';

const useAuth = () => {
    const [user, setUser] = useState<any>({});

    const loginUser = (value: User) => {
        localStorage.setItem('auth', JSON.stringify(value));
        setUser(value);
    }

    const userCurrent = (): any => {
        return user;
    }

    useEffect(() => {
        const userLocal = localStorage.getItem('auth') || '';
        if(userLocal != '')
            setUser(JSON.parse(userLocal));
    }, [])

    return {
        user,
        loginUser,
        userCurrent
    }
}

export default useAuth
