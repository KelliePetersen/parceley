import React from 'react'
import SignUp from './signUp'
import styles from './appPrompt.module.scss'

const AppPrompt = () => {
  return (
    <section className={styles.app} id="signup">
      <div className={styles.grid}>
        <div>
          <div className={styles.phone}></div>
        </div>
        <div>
          <h2 className={styles.heading}>Delicious food <br />is waiting for you</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Maec enas pharetra sit amet nunc in pulvinar.</p>
          <SignUp />
        </div>
      </div>
    </section>
  )
}

export default AppPrompt
