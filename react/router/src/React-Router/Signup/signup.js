import React from 'react';
import styles from './signup.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div>
        <div className={styles.head}>
            <img className={styles.imgss}
          src="https://zerodha.com/static/images/account_open.png"
          alt="account"
        />
        
        <div className={styles.h1}>
          <h1 className={styles.h}>Signup now</h1>
          <br/>
          <div style={{color:"grey"}}>Or track your existing application</div>
          <input type="text" placeholder="Your mobile number" />
        
          <div className={styles.otp}>You will receive an OTP on your number
          <button className={styles.button}> Continue</button></div>
          <p className={styles.p}>Want to open an NRI Account?</p>
          </div>

          </div>
          
       </div>
    )
}
export default SignUp;