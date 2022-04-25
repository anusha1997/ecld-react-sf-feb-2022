import React from 'react';
import styles from './contact.module.css';

const Contact =() => {
    return(
        <div className={styles.main}>
          <h1 className={styles.header}>Let's talk</h1>
          <input className={styles.input} type="text" placeholder='First Name'/>
          <input className={styles.input1} type="text" placeholder='Last Name'/>
          <input className={styles.input2} type="text" placeholder='Email Address'/>
          <input className={styles.input3} type="text" placeholder='Phone Number'/>
          <input className={styles.input4} type="text" placeholder='Area/City/State'/>
          <input className={styles.input5} type="text" placeholder='Organization'/>
          <input className={styles.input6} type="text" placeholder='Pincode'/>
          <input className={styles.input7} type="text" placeholder='Message'/>

        </div>
    )
}
export default Contact;