import React from 'react'
import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch(); // useDispatch --> modify state
  const username = useSelector((state:any)=>state.user.value.username) // useSelector --> get state
  return (
    <div>
      <h1>{username}</h1>
      <input onChange={(e)=>setNewUserName(e.target.value)} type='text' placeholder='name...' />
      <button onClick={()=> dispatch(login({username: newUserName}))}>Login</button>
      <button onClick={()=> dispatch(logout())}>Logout</button>

    </div>
  )
}

export default Login