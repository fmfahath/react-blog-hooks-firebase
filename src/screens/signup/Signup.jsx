import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'

const Signup = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationError, setValidationError] = useState(null)
    const navigate = useNavigate();

    const { signup, error, status } = useAuthentication();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("sumbit", { fname, lname, email, password })

        signup({ fname, lname, email, password });
    }

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [status, error]);

    return (
        <div className='container-signup'>
            <h2>Signup</h2>
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
            {
                status &&
                <div className="alert alert-success" role="alert">
                    Account Created Successfully!
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='pwd'>Password</label>
                    <input type='password' name='pwd' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup