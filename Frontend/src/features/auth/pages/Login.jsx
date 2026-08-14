import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
    }

    if (loading) {
        return (
            <main className='loading-screen'>
                <div className='spinner-container'>
                    <div className='spinner'></div>
                    <p className='loading-text'>Loading...</p>
                </div>
            </main>
        )
    }

    return (
        <div className='auth-page'>
            <div className='auth-card'>

                {/* Header */}
                <div className='auth-header'>
                    <div className='auth-header__logo'>
                        <span className='logo-dot' />
                        <span>InterviewAI</span>
                    </div>
                    <h1>Welcome back</h1>
                    <p>Sign in to access your interview plans and reports.</p>
                </div>

                {/* Form */}
                <form className='auth-form' onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className='input-group'>
                        <label htmlFor='email'>Email address</label>
                        <div className='input-wrapper'>
                            <span className='input-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </span>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='you@example.com'
                                autoComplete='email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <span className='input-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </span>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                                autoComplete='current-password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button type='submit' className='auth-submit-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                            <polyline points="10 17 15 12 10 7"/>
                            <line x1="15" y1="12" x2="3" y2="12"/>
                        </svg>
                        Sign In
                    </button>

                </form>

                <div className='auth-divider' />

                {/* Footer */}
                <p className='auth-footer'>
                    Don't have an account?&nbsp;
                    <Link to='/register'>Register</Link>
                </p>

            </div>
        </div>
    )
}

export default Login