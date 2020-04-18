import React from 'react'
import '../stylesheets/Header.css'

const Header = () => {
  return(
    <header className="portfolio_header">
      <div className="portfolio_title">
        <a href="okaryo">OKARYO</a>
      </div>
      <div className="portfolio_navigation_block">
        <ul>
          <li><a href="/">PRODUCTS</a></li>
          <li><a href="/">PROFILE</a></li>
          <li><a href="/">CONTACT</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
