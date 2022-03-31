import React from 'react';
import './login.css';
import profile from './../image/a.png';
import email from './../image/email.jpg';
import pass from './../image/pass.png';
import Todo from './todo';

const demoEmail = 'anushavenu1997@gmail.com';
const demoPass = 'admin234';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password:'',
            isLogged: false
        }

    }
     handleLogin  = () => {
        if(this.state.email === demoEmail && this.state.password === demoPass){
            this.setState({
                isLogged: true
            })
        } else {
            alert("invalid")
        }
        
    }
  render(){
       const handleChange = (e) => {
           const  { name, value } = e.target;
            this.setState({
               [name] : value
            })
            console.log(this.state.email);
            console.log(this.state.password);

        }
      
        return(
           <div>
            {
                this.state.isLogged ? (
            <div>
                <Todo/>
            </div>
            ) : (

            <div className='main'>
            <div className='sub-main'>
            <div>
                <div className='img'>
                    <div className='container-image'>
                        <img src={profile} alt='profile' className='profile'/>
                    </div>
                </div>
                <div>
               <h2>Login Form</h2>
               <div>
                   <img src={email} alt='email' className='email'/>
                   <input name='email' type="email" onChange={handleChange} className='name' />
               </div>
                <div>
                    <img src={pass}  alt='pass' className='email'/>
                    <input name='password' type="password" onChange={handleChange} className='name'/>
                </div>
                <div className='btn'>
                    <button onClick={this.handleLogin} className='button'>Login</button> 
                </div>

                <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p> 
            </div>
                </div>
                
          
            </div>
            </div>
             )
            }
            </div>
            )
       
    }
}
export default Login;