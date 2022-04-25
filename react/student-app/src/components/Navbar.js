import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

var Links = [{ to:"/", title:"Home"},
            { to:"/about", title:"About"},
            {to:"/contact", title:"Contact"},
            {to: "/student", title:"Student"},
         ]
const Navbar = () => {
    return(
       <div className={styles.Navmain}>
       
        <span className={styles.Link}>
        {
            Links.map((item) => {
                return(
                    <span>
                        <Link className={styles.Linknav} to={item.to}>{item.title}</Link>
                    </span>
                )
            })
        }
        </span>
       </div>
      
    )
}
export default Navbar;