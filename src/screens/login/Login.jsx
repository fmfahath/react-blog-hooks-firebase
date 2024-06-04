import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationError, setValidationError] = useState(null)
    const navigate = useNavigate();

    const { sigin, error, status } = useAuthentication();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("sumbit", { fname, lname, email, password })

        sigin({ email, password });
    }

    // useEffect(() => {
    //     if (status) {
    //         navigate('/');

    //     }
    // }, [status, error]);

    return (
        <div className='container-signup'>
            <h2>Signin</h2>
            {
                validationError &&
                <div className="alert alert-danger" role="alert">
                    {validationError}
                </div>
            }
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='pwd'>Password</label>
                    <input type='password' name='pwd' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>Signin</button>
            </form>
        </div>
    )
}

export default Login