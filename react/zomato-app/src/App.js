import React from 'react';
import Zomato from './component/zomato';

function App() {
  return (
    <div className="App">
      	<h1>Biryani Delivery Restaurants in Kadapa</h1>
      <Zomato name="PUB-G Restaurant" details="Arabian,Biriyani,Labanese..." image='/card1.jpg'/>
      <Zomato name="Nawabs Kebabs & biriyani" details="North Indian, Chinese, Sea" image='/card2.jpg'/>
      <Zomato name="Deccan Restaurant" details="Arabian,Biriyani" image='/card3.jpg'/>
      <Zomato name="Daawat Mandi Restaurant" details="Arabian,Biriyani" image='/card4.jpg'/>
      <Zomato name="BRUNDAVANAM Restaurant" details="Biriyani,Chinese..." image='/card5.jpg'/>
      <Zomato name="KFC" details="Burger, Fastfood" image='/card6.jpg'/>
      <Zomato name="Streat Kitchen" details="Rolls, Momos, Cutlets.." image='/card7.jpg'/>
      <Zomato name="Karthikeya Biriyani Zone" details="Arabian,Biriyani,Andhra" image='/card8.jpg'/>
      <Zomato name="Andhra Kitchen" details="South Indian, North Indian" image='/card9.jpg'/>
      <Zomato name="Sree Manthra Family Kitchen" details="South Indian, North Indian" image='/card10.jpg'/>
      <Zomato name="Biriyani Spot" details="South Indian, North Indian" image='/card11.jpg'/>
      <Zomato name="SLV Andhra Spicy" details="Hyderabadi, North Indian" image='/card12.jpg'/>
    </div>
  );
}

export default App;
