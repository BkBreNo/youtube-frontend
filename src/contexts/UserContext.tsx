import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../api";


type UserStorageProps = {
    children: ReactNode;
}

type UserProps = {
    nome: string,
    email: string,
    id: string,
}

type UserContextProps = {
    login: boolean,
    user: UserProps,
    token: string,
    register: string | null,
    setRegister: (newState: string | null) => void,
    registerError: string | null,
    setRegisterError: (newState: string | null) => void,
    handleLogin: (email: string, password: string) => void,
    logOut: () => void,
    handleRegister: (name: string, email: string, password: string) => void,
}

const initialValue = {
    login: false,
    setLogin: () => { },
    user: {} as UserProps,
    setUser: () => { },
    token: localStorage.getItem('token') ?? '',
    setToken: () => { },
    register: null,
    setRegister: () => { },
    registerError: null,
    setRegisterError: () => { },
    handleLogin: () => { },
    logOut: () => { },
    handleRegister: () => { },
}

export const UserContext = createContext<UserContextProps>(initialValue);

export const UserStorage = ({ children }: UserStorageProps) => {
    const [login, setLogin] = useState(initialValue.login);
    const [user, setUser] = useState(initialValue.user);
    const [token, setToken] = useState(initialValue.token);

    const [register, setRegister] = useState<string | null>(initialValue.register);
    const [registerError, setRegisterError] = useState<string | null>(initialValue.registerError);

    const getUser = (token: string) => {
        api.get('/user/get-user', { headers: { Authorization: token } }).then(({ data }) => {
            setUser(data.user)
            setLogin(true);
        }).catch(() => { })
    }

    useEffect(() => {
        getUser(token);
    }, [token])

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({} as UserProps);
    }


    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            setLogin(true);
            setRegister(null);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);

        }).catch(() => { })
    }

    const handleRegister = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', { name, email, password }).then(({ data }) => {
            setRegister(data.message)
        }).catch((error) => {
            setRegisterError(error.response.data.message)
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            handleRegister,
            register,
            setRegister,
            registerError,
            setRegisterError,
            token,
        }}>
            {children}
        </UserContext.Provider>
    )
}