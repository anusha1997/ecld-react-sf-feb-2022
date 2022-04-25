import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return(
        <div>
        <img className={styles.img}
        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg" alt=''/>
        <img className={styles.imgs}  src="https://www.vidyalayaschoolsoftware.com/assets/images/footer_logo.svg" alt="" />
        <h2 className={styles.header}>Welcome to Vidyalaya</h2>
        <h3 className={styles.headers}>Student Database System</h3>
        </div>

        )

}
export default Home;