import axios from 'axios';
import React, {useState, useEffect}from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import styles from "./Student.module.css";

function Details  () {
    const { id } = useParams();
    const[ details, setDetails ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch();
    })

    const fetch = () => {
      axios.get(`https://student-server-deploy.herokuapp.com/students/${id}`)
        .then((res) => {
            setDetails(res.data)
            console.log(res,"res");
        })
        .catch((error) => console.log(error));
    }
 
    return(
      <div>
     <button className={styles.back} onClick={() => navigate(-1)}>Back</button>
     
        <div className={styles.details_container}>
        <div className={styles.show_details}>
        <img src={details.avatar} alt="" />
            <div>{details.title}. {details.first_name} {details.last_name}</div>
            <div>{details.email}</div>
            <div>{details.address}</div>
            <div>{details.city}</div>
          </div>
     
      </div>
      </div>
    )
    
}
export default Details;