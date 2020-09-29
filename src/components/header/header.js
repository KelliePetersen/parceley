import React, { useState, useEffect } from "react"
import MenuButton from "../menuButton/menuButton"
import ModalMenu from "../modalMenu/modalMenu"
import Logo from "../logo/logo"
import Nav from "../nav/nav"
import styles from "./header.module.scss"

const Header = () => {
  const [navStyle, setNavStyle] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let windowState = () => (window.scrollY > 500) ? setNavStyle(true) : setNavStyle(false)
    windowState();
    document.addEventListener('scroll', windowState)
  }, [])

  return (
    <>
      <header className={`${styles.header} ${navStyle && styles.active}`}>
        <Logo styling={{marginRight: '20px'}} />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <MenuButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Nav buttonState={true} />
        </div>
      </header>
      <ModalMenu modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Header
