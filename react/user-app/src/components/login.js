import React from 'react';
import './login.css';
import profile from './../image/a.png';
import email from './../image/email.jpg';
import pass from './../image/pass.png';
import User from './user';
import axios from 'axios';




class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            error:'',
            token: ''
        }

    }
     handleChange = (e) => {
        const  { name, value } = e.target;
         this.setState({
            [name] : value
         })
        }
    
     handleLogin  = () => {
         axios.post('https://reqres.in/api/login', {
          email : this.state.email,
          password : this.state.password
      })
      .then((res) => {
          console.log(res,"data");
          this.setState({
              token: res.data.token
          })
      })
      .catch((error) => console.log(error))
     }

    
    render(){
        if(this.state.token){
            return <User/>
        
        }
        return (
        <div className='main'>
            <div className='sub-main'>
            <div>
                <h3 className='h3'>{this.state.error}</h3>
                <div className='img'>
                    <div className='container-image'>
                        <img src={profile} alt='profile' className='profile'/>
                    </div>
                </div>
                <div>
               <h2>Login Form</h2>
               <div>
                   <img src={email} alt='email' className='email'/>
                   <input name='email' type="email" onChange={this.handleChange} className='name' />
               </div>
                <div>
                    <img src={pass}  alt='pass' className='email'/>
                    <input name='password' type="password" onChange={this.handleChange} className='name'/>
                </div>
                <div className='btn'>
                    <button onClick={this.handleLogin} className='button'>Login</button> 
                </div><br/>
                    <div >
               <p className='p'>Dont't have an account ?<button  className='buttons' onClick={this.handleRegister}>Sign Up </button></p>
               </div>
            </div>
                </div>
                </div>
            </div>
             
        )
            
       
    }
}
export default Login;