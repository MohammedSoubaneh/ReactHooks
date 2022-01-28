import React, { ReactElement, useEffect } from 'react'
import getData from '../../utils/api';

interface Props {
    
}



function UserList({state, dispatch}: any): ReactElement {
    
    const {users, isLoading, error, selected} = state

    useEffect(() => {
        dispatch({type: "FETCHING_USER_REQUEST"});

        getData("http://localhost:3001/users")
            .then(users => dispatch({
                type: "FETCH_USER_SUCCESS",
                payload: users
            }))
            .catch(error => dispatch({
                type: "FETCH_USER_ERROR",
                payload: error
            }))
    }, [])

    function selectedName(selectedIndex: number) {
        dispatch({
            type: "SELECT_BOOKABLE",
            payload: selectedIndex
        })
    }

    if(error){
        return <div>Error Loading</div>
    }
    if (isLoading) {
        return <p>Is loading data</p>
    }

    return (
        <ul>
            {users.map((n: any,i: any) => (
                <li key={n.id} className={ i === selected ? 'selected': undefined}>
                    <button className='btn' onClick={() => selectedName(i)}>
                        {n.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default UserList
