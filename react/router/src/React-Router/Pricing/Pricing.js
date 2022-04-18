import React from 'react';
import styles from './Pricing.module.css';
import Flex from './Flex';

const Pricing = () => {
    return(
        <div>
            <div className={styles.main}>
            <h1>Pricing</h1>
            </div>

            <div className={styles.desc}>
            {`Free equity investments and flat ₹20 intraday and F&O trades`}
            </div>
            <br/>
        

            <Flex/>
            
        </div>

    )
}
export default Pricing;