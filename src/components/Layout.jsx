import React from 'react'
import {  Outlet } from 'react-router-dom'
import { auth } from '../firebase.config';

export default function Layout() {
  
  async function logOff(){
    
  }

  return (
    <div className='layout'>
      <div className="header">
        <h1>FeedUs</h1>
        <button onClick={()=>logOff()}>Sign Out</button>
      </div>
      <Outlet />
    </div>
  )
}
