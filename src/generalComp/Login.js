import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {login} from '../Redux/actions/authActions'

function Login() {
    const[username, setUsername]= useState('')
    const[password, setPassword]= useState('')

    const dispatch = useDispatch()
    let history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        let user = {name: username, pass: password}
        // debugger
        dispatch(login(user,history))
    }

    return(
        <div>
            <img src="https://img.icons8.com/ios/452/golf.png" alt="Golfer" width="72px" height="57px"/>
            <h2>Please Sign In!</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' onChange={(e)=> setUsername(e.target.value)}/>
                <label>Password</label>
                <input type='password' onChange={(e)=> setPassword(e.target.value)}/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default Login