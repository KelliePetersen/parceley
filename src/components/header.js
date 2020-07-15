import React, { useState, useEffect } from "react"
import MenuButton from "./menuButton"
import Logo from "./logo"
import Nav from "./nav"
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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <MenuButton styling={{marginRight: '20px'}} />
        <Logo />
      </div>
      <Nav />
    </header>
  )
}

export default Header
