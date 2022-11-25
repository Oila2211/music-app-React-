import React from 'react'
import { Link } from 'react-router-dom'

export default function Unlogged() {
  return (
    <div class="unlogged-container">
      <div class="heading">
        <span class="logo">My Music</span>
        <span class="headers">Premium</span>
        <span class="headers">Support</span>
        <span class="headers">Download</span>
        <span class="headers">Register</span>
        <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
          <span class="headers">Sign In</span>
        </Link>
      </div>

      <div class="unlogged-body">
        <div>
          <div class="sample">Listening is</div>
          <div class="sample">everything</div>
          <div class="sample-2">Select songs and categories which might be fun to you.</div>
          <div class="sample-2">Join millions to have fun</div>
          <Link to={'/SingUp'} style={{ textDecoration: 'none' }}>
            <div class="register">Register for free</div>
          </Link>

        </div>
      </div>

      <footer>
        <span>c/o: Uzoma</span>
        <span>Just practising and having fun. welcome to my first music app</span>
      </footer>


    </div>
  )
}
