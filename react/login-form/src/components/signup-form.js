import React from 'react';
import Login from './login';
import './signup-form.css';


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            names : '',
            age : '',
            address : '',
            department:'',
            status:'',
            userName:'',
            password: '',
            confirmPassword:'',
            isRedirect: false,
        

        }
    }

    handleChangeName = (e) =>{
        this.setState({
            names : e.target.value,
            })
    }
    handleChangeAge = (e) =>{
        this.setState({
            age : e.target.value,
            })
    }
    handleChangeAddress = (e) =>{
        this.setState({
            address : e.target.value,
            })
    }
    handleChangeUser = (e) =>{
        this.setState({
            userName : e.target.value,
            })
    }
    handleChangePass = (e) =>{
        this.setState({
            password : e.target.value,
            })
    }
    handleChangeConfirm = (e) =>{
        this.setState({
            confirmPassword : e.target.value,
            })
    }
    handleChange= (e) =>{
        this.setState({
            department : e.target.value,
            status: e.target.value
            })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        let ob = {
        names : this.state.names,
        age : this.state.age,
        address : this.state.address,
        department : this.state.department,
        userName : this.state.userName,
        password : this.state.password,
        confirmPassword : this.state.confirmPassword
        }
      
       let olddata = localStorage.getItem('formdata');
       console.log(olddata,"olddata");
        if(olddata == null){
           olddata = []
           olddata.push(ob)
           localStorage.setItem('formdata',JSON.stringify(olddata));
          
       } else {
        let oldArr = JSON.parse(olddata)
        console.log(oldArr,'old');
        oldArr.push(ob)
        localStorage.setItem("formdata", JSON.stringify(oldArr))
      }
      alert("Submitted Successfully")
      
       }
    
       handleRedirect = (e) => {
           this.setState({
               isRedirect : true
           })
       }
    
    render() {
        if(this.state.isRedirect){
            return(
                <Login/>
            )
        }
        return (
            <div className='mains'>
            <div className='sub-mains'>
                <form>
                    <h1>Registration Form</h1>
                    <div className='form-group'>
                        <label className='names'>Name</label><br/>
                        <input placeholder=' Full Name'
                        type='text'
                        className='form-control'
                        onChange={this.handleChangeName}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='age'>Age</label><br/>
                        <input placeholder='Age'
                        type='number'
                        className='form-control'
                        onChange={this.handleChangeAge}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='address'>Address</label><br/>
                        <input placeholder=' Address'
                        type='text'
                        className='form-control'
                        onChange={this.handleChangeAddress}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Department  </label>
                        <select 
                        as='select'
                        className='form-control'
                        onChange={this.handleChange}
                        required
                        ><option>Marketing</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>IT</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='status'>Married</label>
                        <input 
                        type='checkbox'
                        value='Married'
                        className='form-control'
                        onChange={this.handleChange}
                        />
                       
                    </div>
                    <div className='form-group'>
                        <label className='user'>UserName</label><br/>
                        <input placeholder=' Email'
                        type='text'
                        className='form-control'
                        onChange={this.handleChangeUser}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='user'>Password</label><br/>
                        <input placeholder='Password'
                        type='password'
                        className='form-control'
                        onChange={this.handleChangePass}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='users'>Confirm Password </label><br/>
                        <input placeholder='Password '
                        type='password'
                        className='form-control'
                        onChange={this.handleChangeConfirm}
                        required
                        />
                    </div>
                    <button onClick={this.handleSubmit} type='submit' className='but'>Register</button>

                    <p>Already Registered ? <button className='bttn' onClick={() =>this.handleRedirect}> Login</button></p>

                </form>
            </div>
            </div>
        )
    }
}

export default SignUp;