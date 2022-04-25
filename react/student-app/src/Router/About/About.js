import React from 'react';
import styles from './About.module.css';


const About = () => {
    return(
        <div className={styles.box}>
            <div className={styles.para}>
            <img className={styles.img} src='https://st2.depositphotos.com/3662505/6878/i/600/depositphotos_68789187-stock-photo-students.jpg' alt=''/>
            <div>
                    <h1>Our Journey</h1>
                    <p>Launched in 2002, Vidyalaya provides an end-to-end cloud management solution for educational 
                        institutions. Fully lined with Office 365, Google G-Suite, LMS, and various other systems, our comprehensive ERP platform meets all of the educational institution’s demands via a variety of capabilities. Our ERP software also helps build strong communication and collaboration channels with teachers, students, parents, candidates, and alumni. Since its launch, 1800+ educational institutions have been using this software to manage admissions, sales, registration, timetabling, academic, learning, finance, payments, transportation, and library operations effectively. Vidyalaya ERP is used by most of the reputed educational institutes in 23+states and 8+ countries worldwide.</p>
                </div>
            <div>
                <h1>What we do</h1>
               <p >It’s good to have student information management systems that track a wide variety of information. This information gives you a more significant potential for higher student engagement. But what are some signs that you have a good one? Here are some things to look out for:
            Tracking grade book information is helpful for everyone. It keeps parents informed so they can support their kids. This breakdown also saves time for faculty on fielding questions. 
            The system should ideally provide you some information on the student’s academic progress.  You should see a time-lapse of their grade point average over a period. 
                </p>
                </div>
                <div>
                <h1>Mission</h1>
               <p >Our Mission is to deliver cost-effective and reasonable ERP solutions for educational institutions worldwide. With maximum attention, we aim to provide an outstanding ERP system to educational institutions for enhancing and streamlining their day-to-day tasks.
                lly provide you some information on the student’s academic progress.  You should see a time-lapse of their grade point average over a period. 
                </p>
                </div>
                <br/>
                
                </div>
        </div>
    )
}
export default About;