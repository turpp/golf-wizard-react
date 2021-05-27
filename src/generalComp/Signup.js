import React from 'react'

function Signup() {

    return(
        <div>
            <img src="https://img.icons8.com/ios/452/golf.png" alt="Golfer" width="72px" height="57px"/>
            <h2>Please Sign Up!</h2>
            <form>
                <label>Club Name</label>
                <input type='text'/>
                <label>Phone Number</label>
                <input type ="number"/>
                <label>Adress</label>
                <input type ="text"/>
                <label>Username</label>
                <input type='text'/>

                <label>Password</label>
                <input type='password'/>
                <label>Password Confirmation</label>
                <input type = 'password'/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default Signup