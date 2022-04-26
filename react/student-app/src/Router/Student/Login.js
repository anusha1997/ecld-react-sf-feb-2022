import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import styles from  './login.module.css';


const Login = () => {
    const [ user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.state?.path || '/student'

    const handleLogin = () =>{
       auth.login(user);
       navigate(redirect, { replace: true});
    }
    return(
        <div>
            
            <div className={styles.loginMain}>
            <div className={styles.login}>
            <h1 className={styles.h1}>Login</h1>
            <input className={styles.input} type='text' placeholder='UserName' onChange={(e) => setUser(e.target.value)} /><br/>
            <input className={styles.inputs} type='password' placeholder='Password' onChange={(e) => setUser(e.target.value)} /><br/>
         
            <button className={styles.button} onClick={handleLogin}>Login</button>
        </div>
    </div>
</div>
        )

}
export default Login;