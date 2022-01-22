import React, { memo } from 'react'

const Navbar = memo(({ totalCount }) => (
  <header className="navbar">
    <i className="fas fa-leaf navbar-logo"></i>
    <span>Habit Tracker</span>
    <span className="navbar-count">{totalCount}</span>
  </header>
))

export default Navbar
