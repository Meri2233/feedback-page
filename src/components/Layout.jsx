import React from 'react'
import {  Outlet } from 'react-router-dom'

export default function Layout() {
  
  return (
    <div className='layout'>
      <div className="header">
        <h1>FeedUs</h1>
        <button>Sign Out</button> 
      </div>
      <Outlet />
    </div>
  )
}
