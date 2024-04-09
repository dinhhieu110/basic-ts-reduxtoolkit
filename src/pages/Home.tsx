import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const username = useSelector((state:any)=>state.user.value.username)

  return (
    <div>Home - { username}</div>
  )
}
