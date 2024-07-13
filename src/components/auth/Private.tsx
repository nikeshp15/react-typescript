import React from 'react'
import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

export const PrivateComponent = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return (
    <div>
        {
        isLoggedIn
            ? <Component name={'nikesh'}/>
            : <Login />
        }
    </div>
  )
}
