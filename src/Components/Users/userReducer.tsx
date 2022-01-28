export default function userReducer(state: any, action: any): any {
    switch(action.type) {
        case "FETCHING_USER_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: false,
                users: []
            }
        
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: false,
                users: action.payload
            }
        
        case "FETCH_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case "SELECT_BOOKABLE":
            return {
                ...state,
                isLoading: false,
                error: false,
                selected: action.payload
            }

        default:
            return state
    }
}