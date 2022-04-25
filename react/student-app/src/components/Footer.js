import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footermain}>
            <table className={styles.footer1}>
                <tr className={styles.footer2}>
                    <th> <img  src="https://www.vidyalayaschoolsoftware.com/assets/images/footer_logo.svg" alt="" /> </th>
                    <th className={styles.pop}>About</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td></td>
                    <td >Vidhyalaya</td>
                    <td>C/102-103Opp. 
                       , Ahmedabad-380060, Gujarat, India.</td>
                </tr>
                <tr>
                    <td>© 2010 - 2022</td>
                    <td>Why vidhyalaya</td>
                    <td> Ganesh Meridian</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Benefits to you</td>
                    <td> Nr. Gujarat High Court, S.G.Highway</td>
                </tr>
                
               
            </table>

            <div>
              
            <div style={{display:"flex",marginLeft:"105px",mqrginRight:"55px",marginTop:"15px"}}>
              {
                  ["NSE","BSE","MCX"," Terms & Conditions", "Policies & Procedures","Privacy POlicy", "Disclosure","For Investor's Attention"].map((item) =>{
                      return(
                          <div style={{fontSize:"13px", color:"white", marginLeft:"85px"}}>{item}</div>
                      )
                  })
              }
          </div>
            </div>
        </div>
    )
}
export default Footer;