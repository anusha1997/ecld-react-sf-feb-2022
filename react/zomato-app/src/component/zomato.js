import React from 'react';
import './zomato.css';

function Zomato(props){
    return(
    <div>
        <div class='row'>
                <div class='column'>
                    <img src={props.image} alt="" />
                    <h3>{props.name}</h3>
                    <p>{props.details}</p>
                </div>
        </div>
        </div>
     
    );
}
export default Zomato;