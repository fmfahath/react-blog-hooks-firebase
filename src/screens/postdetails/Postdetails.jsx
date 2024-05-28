import React from 'react'
import './Postdetails.css'
import { useLocation } from 'react-router-dom'

const Postdetails = () => {

    const location = useLocation();
    const { state } = location;
    // console.log(state)


    return (
        <div className='container-postdetails'>
            <h5>{state.title}</h5>
            <p>{state.body}</p>
            <div>
                <button id='edit'>Edit</button>
                <button id='delete'>Delete</button>
            </div>
        </div>
    )
}

export default Postdetails