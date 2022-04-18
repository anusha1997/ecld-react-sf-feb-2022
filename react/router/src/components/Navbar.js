import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

var Links = [
            { to:"/signup", title:"SignUp"},
            { to:"/about", title:" About"},
            { to:"/product", title:" Products"},
            { to:"/pricing", title:" Pricing"},
            { to:"/support", title:" Support"},]

const Navbar = () => {
    return(
        <div className={styles.NavMain}>
            <div>
                <img className={styles.ZerodhaImg} src="https://zerodha.com/static/images/logo.svg" alt=""/>
                <span className={styles.Link}>
                    {
                        Links.map((item) => {
                            return(
                                <span>
                                    <Link className={styles.LinkNav} to={item.to}>{item.title}</Link>
                                </span>
                            )

                        })
                    }
                </span>
            </div>
        </div>
    )
}
export default Navbar;