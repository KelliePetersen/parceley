import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import MenuButton from "./menuButton"
import styles from "./header.module.scss"

const Header = () => {
  const [navStyle, setNavStyle] = useState(false)

  useEffect(() => {
    let windowState = () => window.scrollY ? setNavStyle(true) : setNavStyle(false)
    windowState();
    document.addEventListener('scroll', windowState)
  }, [])
  
  return (
    <header className={`${styles.header} ${navStyle && styles.active}`}>
      <div>
        <MenuButton />
        <Link className={styles.logo} to="/#">Parc<span>e</span>l<span>e</span>y</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#services">Recipes</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
          <li><Link to="/#signup" className={styles.cta}>Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
