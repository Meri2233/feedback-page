import React from 'react'
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <div className='intro'>
        <h3>Share your views about anyone.</h3>
        <p><Link to="/login">Login</Link> to share.</p>
        <p>New Here? <Link to="/signup">Signup</Link>.</p>
    </div>
  )
}
