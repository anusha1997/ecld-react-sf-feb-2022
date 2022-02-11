//ASSIGNMENT 1
//Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop

let array = ['anu',24,'F'];
let obj = {};
obj.name = array[0];
obj.age = array[1];
obj.gender = array[2];

for(let key in obj){
    let value ;
    value = obj[key];
    console.log(key + "-" + value);
}

//ASSIGNMENT 2
//Given a string , calculate the occurrence of each and every character and print the output.

let string = 'edstemeee';
let object = {};

for(i = 0; i < string.length; i++){
   if(object[string[i]] ){
       object[string[i]] =   object[string[i]] + 1;
   }else {
       object[string[i]] = 1;
       
   }
} 
for(let key in object){
    console.log(key + "-" + object[key]);
}

//ASSIGNMENT 3
//Given user's names and their phone numbers , query the given user and find the phone number

let user = [{
    name: 'Anu',
    phone: 7854785412
},
{
    name: 'Manu',
    phone: 7654788512
},{
    name:'Sinu',
    phone:4524578796
}]

for(i = 0; i < user.length; i++){
    if(user[i].name === 'Anu'){
        console.log(user[i].phone);
    }
}

//ASSIGNMENT 4
//Given an array , find the unique elements .
let ages = [26, 27, 26, 26,30, 28, 28, 29, 29, 30];
let cnt = 1;
let obj1 = {};

for(i=0; i <ages.length; i++){
    if(!obj1[ages[i]] ){
        obj1[ages[i]] = cnt;
    } else {
        delete obj1[ages[i]];
    }
    
}
console.log(Object.keys(obj1));

//ASSIGNMENT 5
//Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" 

let string1 = 'funeral';
let string2 = 'real fun';
let n1 =  string1.length;
let n2 = string2.length;

// if(n1 != n2){
//     console.log("false");
// }

let a = string1.split('').sort().join('');
let b = string2.split('').sort().join('');

if(a === b){
    console.log("true");
}else{
    console.log("false");
}
//ASSIGNMENT 6
//Given an employees database query the employees who are from hyderabad and having experience more than 3 years

let database = [ { 
    name: 'vicky', 
    age: 24, 
    married: false, 
    address: { city: 'hyderabad', state: 'andhra', pincode: '516003' },
    skills: ['react', 'html', 'nodejs'], 
    experience: 2 }, 
    {
    name: 'nirmal', 
    age: 20, 
    married: true, 
    address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, 
    skills: ['css', 'figma'], 
    experience: 4 },
     {
     name: 'neeraj', 
     age: 26, 
     married: false, 
     address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, 
     skills: ['aws', 'angular', 'nodejs'],
      experience: 5 
    } ];

     for(let i = 0; i < database.length; i++){
         if(database[i].address.city == 'hyderabad'){
            console.log("Employee from Hyderabad:",database[i].name);
         } if(database[i].experience > 3){
             console.log("Employee have more than 3 years experience:",database[i].name);
         }
     }
     
   