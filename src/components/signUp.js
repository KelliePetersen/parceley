import React from 'react'
import styles from './signUp.module.scss'

const SignUp = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="email" style={{position: 'relative'}}>
        <span className={styles.label}><div className={styles.icon}></div>Enter your email</span>
        <input type="email" name="email" id="email" className={styles.email} />
      </label>
      <input type="submit" value="Sign Up" className={styles.button} />
    </form>
  )
}

export default SignUp
