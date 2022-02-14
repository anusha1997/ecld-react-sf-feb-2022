//ASSIGNMENT 1
//  Given an array of numbers print the square of those numbers

let array = [2,5,6,9,11];

array.forEach(function(el){
    console.log(el**2);
});

//ASSIGNMENT 2
//Given an array of numbers generate an array containing the double value of the numbers
console.log('\n');
let arr = [1,2,4,6,8];

let result = arr.map(function(el){
 return el * 2;
})
console.log(result);

//ASSIGNMENT 3
//Given an array of numbers extract the numbers divisible by 3

let array1 = [1,2,3,4,6];

let res = array1.filter(function(el){
    return el % 3 == 0 ;
})
console.log(res);

//ASSIGNMENT 4
//Given an array of numbers print the product of all numbers

let array2 = [3,6,4];

let ans = array2.reduce(function(ac,el){
    return ac * el;
})
console.log(ans);

//ASSIGNMENT 5
//Given an array of strings print the length of each string

let array3 = ['html','react','java'];

array3.map(function(el){
    console.log(`${el} - ${el.length}`);
})


//ASSIGNMENT 6
//Given an array of string generate an array with their first characters

let array4 = ['Edstem','Tech'];

let char = array4.map(function(el){
    return el[0] 
})
console.log(char);

//ASSIGNMENT 7
//Given an array of string generate an array whose first or last character is a
 let array5 = ["assignment", "problem", "media", "upload"];

 let cha = array5.filter(function(el){
     return el[0] === 'a' || el[el.length - 1] === 'a'
 })
console.log(cha);

//ASSIGNMENT 8
//Given an array of strings print the snake case of the strings [Assume Small case strings]

let array6 = ["edstem", "tech"];

let snake = array6.reduce(function(ac,el){
    console.log(ac + "_" + el);
})

//ASSIGNMENT 9
//Create a user object with name, age, gender, skills as properties and add the below methods to it
//i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
//ii. getSkills method => user.getSkills() => It should return all the skills of the user

let user =  { 
    name: 'vicky', 
    age: 24, 
    gender: 'M', 
    skills: [ 'html', 'nodejs'], 
    addSkill: function(skill){
        return this.skills.push(skill)
    }
}
 user.addSkill('react')  
 console.log(user.skills);
