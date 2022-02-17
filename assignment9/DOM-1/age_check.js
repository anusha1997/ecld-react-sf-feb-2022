function checkAge(){
    let age = document.getElementById('age').value;
   if( age > 18){
     document.getElementById('user').innerHTML = " You can drive in India!"
   }else if ( age < 18){
    document.getElementById('user').innerHTML = "You can't drive in India"
   }else {
    document.getElementById('user').innerHTML = "You are just old enough to drive in India!"
   }
}