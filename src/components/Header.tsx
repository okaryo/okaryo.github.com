import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Header.css'

const Header = () => {
  return(
    <header className="portfolio_header">
      <div className="portfolio_title">
        <Link to="/">OKARYO</Link>
      </div>
      <div className="portfolio_navigation_block">
        <ul>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/profile">PROFILE</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
