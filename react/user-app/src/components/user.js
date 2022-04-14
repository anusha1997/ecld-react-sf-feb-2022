import React from 'react';
import './user.css';
import axios from 'axios';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            data: [],
            details: [],
            showDetails:false
        }
    }
    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handleSearch = () => {
        axios.get("https://api.github.com/search/users?",{
            params : {
                q : this.state.name
            }
        })
        .then((res) => 
             this.setState({
                 data :res.data.items
             }))
          
       .catch((error) => console.log(error));
    }

    handleDetails = (login) => {
        axios.get("https://api.github.com/users/" + login)
        .then((res) => {
            this.setState({
                details : res.data,
                showDetails:true
            })
        })
        .catch((error) => console.log(error));
    }
    
    render(){
      
        return(
            <div>
                <div  className='user-container'>
                <h1 className='git'>Github Users</h1>
                <input className='search' placeholder='search' onChange={this.handleChange}/>
                <button className='userSearch' onClick={this.handleSearch}>Search User</button>
                </div>
                { this.state.showDetails && (
              
                    <table className='details'>
                        <tr>
                            <th>Created Date </th>
                            <th>Followers</th>
                            <th>Repository</th>
                        </tr>
                        <tr>
                            <td>{this.state.details.created_at}</td>
                            <td>{this.state.details.followers}</td>
                            <td>{this.state.details.public_repos}</td>
                        </tr>
                    </table>
                    
                     )}
                 {
                     this.state.data.map(item=> {
                        return (
                             <div className='display' >
                            <img className='avatar' width="300" height="200" src={item.avatar_url} alt='img'/>
                            <h2 className='id'>{item.login}</h2> 

                            <button className='more' onClick={()=>this.handleDetails(item.login)}>See More
                            </button>
                            </div>
                        )
                        }) 
                        } 
                       
                </div>
         

        )
    }
}
export default User;