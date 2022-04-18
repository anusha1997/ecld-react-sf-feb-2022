import React from 'react';
import styles from './support.module.css';

const Support = () => {
    return(
        <div>
            <div className={styles.top}>
                <div className={styles.box}>
                    <div className={styles.support}>Support Portal <span className={styles.span}>English</span></div>
                    <div className={styles.kite}>Login with Kite</div>

                    <div className={styles.input}>
                        <div className={styles.search}>
                        Search for an answer or browse help topics to create a ticket

                        </div>
                        <input className={styles.inputs}
                        type="text"
                        placeholder={`Eg: how do i activate F&O, why is my order getting rejected ...`}
                         />

                         <div className={styles.flex}>
                             <h4 className={styles.below}>Track account opening</h4>
                            <h4 className={styles.below}>Track segment activation</h4>
                            <h4 className={styles.below}>Intraday margins</h4>
                            <h4 className={styles.below}>Kite user manual</h4>
                         </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Support;