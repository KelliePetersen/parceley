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
              <Image filename="mobile3.png" />
            </div>
          </div>
          <div>
            <h2 className={styles.heading}>Get the App</h2>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maec enas pharetra sit amet nunc in pulvinar.</p>
            <SignUp />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPrompt
