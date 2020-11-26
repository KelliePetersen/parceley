import React from 'react'
import Image from '../image'
import SignUp from '../signUp/signUp'
import styles from './appPrompt.module.scss'

const AppPrompt = () => {
  return (
    <section className={styles.app} id="signup">
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div style={{position: 'relative'}}>
            <div className={styles.phone}>
              <div className={styles.basil}><Image filename="basil.png" /></div>
              <Image filename="mobile3.png" />
            </div>
          </div>
          <div>
            <h2 className={styles.heading}>Get the App</h2>
            <p className={styles.text}>Sign up to receive notifications about development, special offers, and a chance to win free meals.</p>
            <SignUp label="sign-up" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPrompt
