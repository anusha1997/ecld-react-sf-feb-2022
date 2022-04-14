import React from 'react';
import './login.css';
import axios from 'axios';
import { AppContext  } from '../Context/AppContextProvider';
import profile from './../image/a.png';
import email from './../image/email.jpg';
import pass from './../image/pass.png';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            error:'',
            isLogged: false,
            isAuth : false,
            responseData:''
        }

    }
     handleChange = (e) => {
        const  { name, value } = e.target;
         this.setState({
            [name] : value
         })
        }
    
        handleLogin  = () => {
            const { toggleAuth, setToken} = this.context
            axios.post('https://reqres.in/api/login', {
             email : this.state.email,
             password : this.state.password
         })
         .then((res) => {
             console.log(res,"data");
             this.setState({
                 responseData: res.data.token,
                 isAuth: toggleAuth(),
                 
             });
             setToken(this.state.responseData)
            
         })
         .catch((error) => console.log(error))
        }
        handleRegister = () => {
        this.setState({
            isRegister : true
        })
       
    }
        render(){
        return (
            <div>
            {
                this.state.isAuth && (
                    <div>
                    <h1>Successfully Logged In With Token : <span>{this.context.responseData}</span></h1>
                 </div>
               
                )
            }
           <div>
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
             
            
            </div>
            </div>
            )
        
    }
}
Login.contextType = AppContext;
export default Login;