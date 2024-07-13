import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const MainUser = () => {

    const userContext = useContext(UserContext)
    const handleLogIn = () => {
        if (userContext) {
            userContext.setUser({ name: 'nikesh', email: 'abc@gm.com'})
        }
    }
    const handleLogOut = () => {
        if (userContext) {
            userContext.setUser(null)
        } 
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        <div>User name : {userContext?.user?.name}</div>
        <div>email : {userContext?.user?.email}</div>
    </div>
  )
}
