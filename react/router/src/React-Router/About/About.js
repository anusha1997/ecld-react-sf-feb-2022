import React from 'react';
import styles from './About.module.css';

const About = () => {
    return(
        <div className={styles.head}>
            <h1>We pioneered the discount broking model in India.</h1>
            <h1>Now, we are breaking ground with our technology.</h1>
            <br/>

        <div className={styles.flexbox}>
        <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India in terms of active retail
            clients.
          </p>

          <p>
            Over 3+ million clients place millions of orders every day through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
</div>
    )
}
export default About;