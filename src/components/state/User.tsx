import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogIn = () => {
        setUser({ name: 'nikesh', email: 'abc@gm.com'})
    }
    // const handleLogOut = () => {
    //     setUser(null)
    // }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            {/* <button onClick={handleLogOut}>Log Out</button> */}
            <div>User name : {user?.name}</div>
            <div>email : {user?.email}</div>
        </div>
    )
}
