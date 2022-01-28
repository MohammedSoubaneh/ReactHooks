import React, { ReactElement, useReducer, useEffect } from 'react'
import UserList from './UserList'

import userReducer from './userReducer';

interface Props {
    
}

const initialState = {
    users: [],
    isLoading: true,
    error: false,
    selected: 0
}

function UsersPage({}: Props): ReactElement {

    const [state, dispatch] = useReducer(userReducer, initialState)
    

    return (
        <div>
            <UserList state={state} 
                dispatch={dispatch} />
        </div>
    )
}

export default UsersPage
