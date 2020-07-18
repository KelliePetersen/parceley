import React from 'react'
import styles from './signUp.module.scss'

const SignUp = () => {
  return (
    <form className={styles.form}>
      <label for="email" style={{position: 'relative'}}>
        <span className={styles.label}>Enter your email</span>
        <input type="email" name="email" id="email" className={styles.email} />
      </label>
      <input type="submit" value="Sign Up" className={styles.button} />
    </form>
  )
}

export default SignUp
