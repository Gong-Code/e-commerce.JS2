import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [token, setToken] = useState(null)

    useEffect(() =>{
        if(token) {}
        
        const localStorageToken = localStorage.getItem('access_token')

        if(localStorageToken !== null){
            setToken(localStorageToken)
        }

    }, [])

    useEffect(() => {
        
        if(token) {
            localStorage.setItem('access_token', token)
        }
        else {
            localStorage.removeItem('access_token');
        }
    }, [token])

    const getToken = () => {
        const localStorageToken = localStorage.getItem('access_token')

        if(localStorageToken !== null){
            setToken(localStorageToken)
        }
    }

    const register = async (formData) => {
        try {
        const res = await fetch('https://js2-ecommerce-api.vercel.app/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

            console.log(res)
            const data = await res.json()
            console.log(data)
            
            if(res.status !== 201) {
                throw new Error(data)
            }
            
            setToken(data.token)
        
        } catch (error) {
            console.log("Something went wrong", error)
        }
    }

    const login = async (formData) => {
        try {
            const response = await fetch('https://js2-ecommerce-api.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        console.log(response)
        const data = await response.json()
        console.log(data)
    
        if(response.status !== 200) {
        throw new Error(data)
        }

        setToken(data.token)

        return data.token

        } catch (error) {
            console.log("Something went wrong", error)
            
        }
    }

    const value = {
        register,
        login,
        token,
        getToken
    }

    return(
        <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) throw new Error('useAuthContext must be inside an AuthContextProvider')

    return context
}