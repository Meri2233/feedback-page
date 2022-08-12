import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='layout'>
        <div className="header">
            <h1>FeedUs</h1>
            <Link to={"/feedback"}>Send Feedback</Link>
        </div>
        <Outlet/>
    </div>
  )
}
