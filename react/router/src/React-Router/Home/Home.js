import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
        <img className={styles.img} src='./landing.png' alt='landing' />
        <div className={styles.head}>Invest in Everything</div>
        <div className={styles.main}>Online Platform to invest in stocks, derivatives, mutual funds,and more</div>
        
        <button>Sign up now</button>
        </>
    )
}
export default Home;