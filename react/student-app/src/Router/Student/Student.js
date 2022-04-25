import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Student.css";
import {  useNavigate} from 'react-router-dom';

export const Student = () => {

  const[ data, setData ] = useState([]);
  const[ details, setDetails ] = useState([]);
  const[ name, setName ] = useState("");
  const[ showDetails, setShowDetails] = useState(false);
  const[ currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
 
  const [sort, setSort] = useState("")
  const[ sortValue, setSortvalue] = useState("");
  const sortOptions = ["first_name", "email","city"]
  const navigate = useNavigate();
  useEffect(() => {
    handleStudents(0,4, 0);
  }, []);


const handleSearch = () => {
    axios.get("https://student-server-deploy.herokuapp.com/students", {
        params: {
          q: name,
        
        },
      })
      .then((res) => {
        setData(res.data)
        setName("")
      })
      .catch((err) => console.log(err));
  };

const handleReset = () =>{
  handleStudents(0,4,0);
  setSort("");
}
 const handleChange = (event) => {
    setName(event.target.value)
  };

 const handleDetails = (id) => {
    axios.get("https://student-server-deploy.herokuapp.com/students/" + id)
      .then((res) => {
        setDetails(res.data)
        setShowDetails(true)
      }
        )
        .catch((err) => {
          console.log(err);
        });
  };

const  close = () => {
    setShowDetails(false)

  };

 const handleStudents = (start, end , increase, optType=null, sort) => {
   switch(optType){
     case "sort":
       setSort(sort);
     return  axios.get(`https://student-server-deploy.herokuapp.com/students?_sort=${sort}&_order=asc&_start=${start}&_end=${end}`)
      .then((result) => 
      {
         setData(result.data)
         setCurrentPage(currentPage + increase)
      })
      
      .catch((error) => console.log(error));
    
      default:
    axios.get(`https://student-server-deploy.herokuapp.com/students?_start=${start}&_end=${end}`)
      .then((result) => 
      {
         setData(result.data)
         setCurrentPage(currentPage + increase)
      })
      
      .catch((error) => console.log(error));
    }
  }

  const handleSort = (e) => {
    let value = e.target.value;
    setSortvalue(value);
    handleStudents(0,4,0, "sort", value)
    
  }

  const pagination = () => {
    if(data.length < 4 && currentPage === 0) return null;
    if(currentPage === 0){
      return(
        <div>
        <button className="btn">1</button>
        <button onClick={() => handleStudents(4,8,  1, sort)}>Next</button>
        </div>
      )
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit){
      return(
        <div>
        <button onClick={() => handleStudents((currentPage - 1) * 4,currentPage * 4,  -1, sort)}>Prev</button>
        <button>{currentPage + 1}</button>
        <button onClick={() => handleStudents((currentPage + 1) * 4,(currentPage + 2) * 4,  1, sort)}>Next</button>
        </div>
      )
    }else {
      return(
        <div>
        <button onClick={() => handleStudents((currentPage - 1) * 4, currentPage * 4, -1, sort)}>Prev</button>
        <button>{currentPage + 1}</button>
        </div>
      )
    }
  }
    return (
        <div className="main">
          <div className="input">
            <input className="user-input" placeholder="Search Student" onChange={handleChange} value={name}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
            <button className="search-btn" onClick={handleReset}>
              Reset
            </button>
          </div>

          <div className="details-container">
            {
            showDetails && (
              <div className="show-details">
                <div>
                 <button className="close" onClick={close}>
                    X
                  </button> 
                </div>
                <img src={details.avatar} alt="" />
                <div>{details.title}. {details.first_name} {details.last_name}</div>
                <div>{details.email}</div>
                <div>{details.address}</div>
                <div>{details.city}</div>
              </div>
            )}
          </div>

          <div className="studentsMain">
            {
            data && data.map((item) => {
                return (
                  <div className="studentMain" key={item.id}>
                    <img src={item.avatar} alt="" />
                    <h2>{item.title}. {item.first_name} {item.last_name}</h2>
                    <button className="details-btn" onClick={() => navigate(`${item.id}`)}>
                      View More
                    </button>
                  </div>
                );
              })}
          </div>
          <div>
         
        </div>
        <div style={{color:"white", margin:"auto", padding: "15px",maxWidth:"250px", alignContent:"center"}}>{pagination()}</div>

        <div>
      
          <h2 style={{color: "black"}}>Sort By:</h2>
          <select style={{width: "30%", borderRadius: "2px", height:'30px', }}
              onChange={handleSort}
              value={sortValue}
              >
                <option>Please Select Value</option>
                {
                  sortOptions.map((item,index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                }
          </select>
        </div>
        </div>
    );

}
export default Student;

