import React from 'react'

export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>Profile component: name is : {name}</div>
  )
}
