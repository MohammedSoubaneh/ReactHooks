import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
    
}

function UserPicker({}: Props): ReactElement {

    const [users, setUsers]: any = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/users/")
            .then(resp => resp.json())
            .then((data =>setUsers(data)));
    }, []);

    if(users === null) {
        return <div>Nothing</div>
    }

    console.log(users)

    return (
        <select>
            {users.map((n: any) => (
                <option key={n.id}>{n.name}</option>
            ))}
        </select>
    )
}

export default UserPicker
