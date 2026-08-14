import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const Protected = ({children}) => {
    const { loading,user } = useAuth()


    if(loading){
        return (
            <main className='loading-screen'>
                <div className='spinner-container'>
                    <div className='spinner'></div>
                    <p className='loading-text'>Loading...</p>
                </div>
            </main>
        )
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected