export const authReducer = (state={loggedIn: false, currentUser: {}, errorMessages: '', fetching: false}, action)=>{
    switch(action.type){
        case 'AUTH_SUCCESSFUL':
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                currentUser: action.payload.currentUser,
                errorMessages: '',
                fetching: false
            }
        case 'AUTH_FAILED':
            return{
                ...state,
                errorMessage: action.payload.errorMessage,
                fetching: false
            }
        default:
            return{
                ...state,
                fetching: false
            }
    }
}