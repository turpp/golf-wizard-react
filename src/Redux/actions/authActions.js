
export const login = (user, history)=>{
    return dispatch=>{
        // debugger
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user:user})
        })
        .then(resp=>resp.json())
        .then(json =>{
            debugger
            history.push('/')
        })
    }
}