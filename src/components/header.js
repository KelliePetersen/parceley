import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const [navStyle, setNavStyle] = useState(false)

  useEffect(() => {
    let windowState = () => window.scrollY ? setNavStyle(true) : setNavStyle(false)
    windowState();
    document.addEventListener('scroll', windowState)
  }, [])
  
  return (
    <header className={`${styles.header} ${navStyle && styles.active}`}>
      <div>
        <button type="button" />
        <Link className={styles.logo} to="/#">Parc<span>e</span>l<span>e</span>y</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#services">Recipes</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
          <li className={styles.cta}><Link to="/#signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
