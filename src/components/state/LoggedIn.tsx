import React, { useState } from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}
