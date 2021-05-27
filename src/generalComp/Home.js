import React from 'react'
import {Link} from 'react-router-dom'


function Home(){

   
    return(
        <div>
            <h1>Welcome To Tournament Wizard</h1>
            <p>Golf tournaments are ment to be fun! Hosting them should be to. Tournament Wizard is design to make running tournaments easy for your club!</p>

            <Link to='/login'>
            <button>Login</button>
            </Link>
            <Link to='/signup'>
            <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default Home