import React, { useState, useEffect } from 'react'
import styles from './signUp.module.scss'

const SignUp = () => {
  const [buttonValue, setButtonValue] = useState('→')
  const [signUpTextValue, setSignUpTextValue] = useState('Enter your email')

  useEffect(() => {
    let windowState = () => (window.innerWidth > 767) ? setButtonValue('Sign Up') : setButtonValue('→')
    windowState();
    window.addEventListener('resize', windowState)
  }, [])

  const handleClick = () => {
    setSignUpTextValue('');
  }

  return (
    <form className={styles.form}>
      <label htmlFor="email" style={{position: 'relative'}}>
        <span className={styles.label}><div className={styles.icon}></div><span id="signup-text">{signUpTextValue}</span></span>
        <input type="email" name="email" id="email" required className={styles.email} onClick={handleClick} />
      </label>
      <input type="submit" value={buttonValue} className={styles.button} />
    </form>
  )
}

export default SignUp
