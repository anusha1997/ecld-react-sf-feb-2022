import React from 'react';
import './theme.css';
import { ThemeContext  } from '../ThemeContext/ThemeContextProvider';
import email from './../image/email.jpg';
import pass from './../image/pass.png';

export default class Theme extends React.Component{
    
    render(){
        return (
        
            <div>
           <div  className={this.context.button ? "True" : "False"}>
                <h2>Login Form</h2>
               <div>
                   <img src={email} alt='email' className='email'/>
                   <input name='email' type="email"  className='name' />
               </div>
                <div>
                    <img src={pass}  alt='pass' className='email'/>
                    <input name='password' type="password" className='name'/>
                </div>
                <div className='btn'>
                    <button  className='button'>Login</button> 
                </div>
                  </div>
             
            
            </div>
           
        )
    }
}
Theme.contextType = ThemeContext;