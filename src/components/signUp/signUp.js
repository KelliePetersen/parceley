import React, { useState, useEffect } from 'react'
import styles from './signUp.module.scss'

const SignUp = () => {
  const [buttonValue, setButtonValue] = useState('→')

  useEffect(() => {
    let windowState = () => (window.innerWidth > 767) ? setButtonValue('Sign Up') : setButtonValue('→')
    windowState();
    window.addEventListener('resize', windowState)
  }, [])

  return (
    <form className={styles.form}>
      <label htmlFor="email" style={{position: 'relative'}}>
        <span className={styles.label}><div className={styles.icon}></div>Enter your email</span>
        <input type="email" name="email" id="email" className={styles.email} />
      </label>
      <input type="submit" value={buttonValue} className={styles.button} />
    </form>
  )
}

export default SignUp
