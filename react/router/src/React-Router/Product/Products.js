import React from 'react';
import styles from './Product.module.css';

const Product = () => {
    return(
        <div>
            <div className={styles.main}>
                <h1>Technology</h1>
            </div>
            <div className={styles.desc}>
            Sleek, modern, and intuitive trading platforms

            </div>
            <br/>

            <div className={styles.box}>
            <img className={styles.imgs} src='https://zerodha.com/static/images/products-kite.png' alt='kite'/>
            <div className='para'>
                <h1>Kite</h1>
                <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
            </div>
            </div>
        </div>

    )
}
export default Product;