import React from 'react';
import { AppContext } from '../Context/AppContextProvider';
import './login.css';
import Login from './login';

class Container extends React.Component {
    render(){
      const { isAuth, toggleAuth} = this.context;
     console.log(this.context.responseData);
     
        return (
            <div>
              
                <div className='auth'> 
                <button className='toggle' onClick={toggleAuth}>{isAuth ? "Log In" : "Log Out"}</button> 
                </div>
                {
                isAuth ? (
                    <div>
                    <Login/>  
                   
                    </div>
                ) : (
                    <div>
                        <h1>Successfully Logged In With Token : <span>QpwL5tke4Pnpja7X4</span></h1>
                    </div>
                )}
             </div>
        ) 
        


           
    }
}

Container.contextType = AppContext;
export default Container;