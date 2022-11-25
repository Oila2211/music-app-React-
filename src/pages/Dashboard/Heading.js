import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
  return (
    <div>
      <div className='dash-header'>
        <div className='dash-header-1'>My Music</div>
        <Link to={'/Browse'} style={{ textDecoration: 'none', color: 'white' }}>
          <div className='dash-header-1'>Browse</div>
        </Link>
        <div className='dash-header-1'>Listen Now</div>
        <div className='dash-header-1'>Radio</div>
        <div className='dash-header-1'>LogOut</div>
      </div>
    </div>
  )
}
