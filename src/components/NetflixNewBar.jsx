import React from 'react'
 import "../assets/css/NetflixBar.css"

export const NetflixNewBar = () => {
  return (
    <header className="navbar">
      
      <div className="left">
        <h1 className="logo">NETFLIX</h1>

        <ul className="menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="right">
        <span className="icon">🔍</span>
        <span className="icon">🔔</span>

      
        <img 
          src="https://i.pravatar.cc/30" 
          alt="profile" 
          className="profile"
        />
      </div>

    </header>
  )
}