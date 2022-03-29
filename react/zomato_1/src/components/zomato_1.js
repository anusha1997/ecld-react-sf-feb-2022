import React from 'react';
import './zomato_1.css';


const data = [
    {
      name :"PUB-G Restaurant" ,
      details :"Arabian,Biriyani,Labanese...",
      image :'/card1.jpg'
    },
    {
      name :"Nawabs Kebabs & biriyani" ,
      details :"North Indian, Chinese, Sea",
      image :'/card2.jpg'
    },
    {
      name :"Deccan Restaurant" ,
      details :"Arabian,Biriyani",
      image :'/card3.jpg'
    },
    {
      name :"Daawat Mandi Restaurant" ,
      details :"Arabian,Biriyani",
      image :'/card4.jpg'
    },
    {
      name :"BRUNDAVANAM Restaurant" ,
      details :"Biriyani,Chinese...",
      image :'/card5.jpg'
    },
    {
      name :"KFC"  ,
      details :"Burger, Fastfood",
      image :'/card6.jpg'
    },
    {
      name :"Streat Kitchen",
      details :"Rolls, Momos, Cutlets..",
      image :'/card7.jpg'
    },
    {
      name :"Karthikeya Biriyani Zone" ,
      details :"Arabian,Biriyani,Andhra",
      image :'/card8.jpg'
    },
    {
      name :"Andhra Kitchen" ,
      details :"South Indian, North Indian",
      image :'/card9.jpg'
    },
    {
      name :"Sree Manthra Family Kitchen" ,
      details :"South Indian, North Indian" ,
      image :'/card10.jpg'
    },
    {
      name :"Biriyani Spot"  ,
      details :"South Indian, North Indian",
      image :'/card11.jpg'
    },
    {
      name :"SLV Andhra Spicy" ,
      details :"Hyderabadi, North Indian",
      image :'/card12.jpg'
    }
  ]

    function Zomatoe(){
    return(
     <div>
    {
        data.map(item => {
        return (
        <div class='row'>
        <div class='column'>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.details}</p>
             </div>
             </div>
          )
        })
      }
         </div>
    )
}
export default Zomatoe;