//ASSIGNMENT 1
//Given an array of string join them with a comma 
let array = ['java','html','css','react'];
let str = '';

for(let i = 0; i < array.length-1; i++){
   str = str + array[i] + ',' ;
 }
str = str + array[3] ;
console.log(str);

//ASSIGNMENT 2
//Given an array or string print the total no of characters
 let arr =  ['java','html','css','react'];
 let count = 0;

 for(let i = 0; i<arr.length; i++){
  if(arr[i] != ' '){
      count = count + array[i].length;
    
  }
 }
 console.log("Total no of characters:", count);

 //ASSIGNMENT 3
 //Given an array of game, scores print the highest and lowest score
let array1 = [78,90,56,65,34,44,59];
let max = array1[0];
let min = array1[0];

for(let i = 0; i < array1.length; i++){
    if(array1[i] >=  max){
       max = array1[i]
    }
    if(array1[i] < min){
        min = array1[i];
    }
}
console.log(max);
console.log(min);

//ASSIGNMENT 4
//Given a matrix, print the rows and columns

let matrix = [
    [1,2,3],
    [3,4,5],
    [6,7,8]];

let rows = matrix.length;
let cols = matrix[0].length;
console.log("Rows:",rows);
console.log("Cols:",cols);

//ASSIGNMENT 5
//Given a matrix print the first diagonal

let matx = [
    [1,2,3],
    [3,4,5],
    [6,7,8]];

 for(let i = 0; i<matx.length;i++){
     for(let j = 0; j<matx[i].length;j++){
         if(i === j){
             console.log(matx[i][j]);
         }
     }
 }

 //ASSIGNMENT 6
 //Given an array of string generate an array whose first or last character is a

 let arry = ["react","assignment","media","htamal"];

 for(let i=0; i<arry.length; i++){
          if(arry[i][0] === 'a' || arry[i][arry[i].length - 1] === 'a' ){
            console.log(arry[i]); 
    }
 }   
 
 //ASSIGNMENT 7
 //Given an array of strings print the snake case of the strings [Assume Small case strings]

 let array2 = ["edstem","tech"];
 let st = '';

 for(let i = 0; i < array2.length-1; i++){
         st = st + array2[i] + '_';
 } 
 st = st + array2[1];
 console.log(st);

 //ASSIGNMENT 8
 //Given an 2d Array print the difference of first and second diagonals sum 

 let matrx = [
     [1,2,3],
     [4,5,6],
     [11,8,9]
 ];
let sum = 0;
let total = 0;
let diff = 0;
 for(let i = 0; i < matrx.length; i++){
     for(let j = 0; j < matrx[i].length; j++){
         if(i === j){
             sum = sum + matrx[i][j];
            
         }if( i === matrx[i].length - j - 1){
             total = total + matrx[i][j];
         }
     }
 } 
 diff = total - sum ;
 console.log(sum);
 console.log(total);
 console.log(diff);

 //ASSIGNMENT 9
 //Given an array of numbers print the product of all numbers
 
 let array3 = [3,4,5,2];
 let product = 1;

for(let  i = 0; i < array3.length; i++){
    product = product * array3[i]
}
console.log(product);

//ASSIGNMENT 10
//Given an 2d array print the mid column
 
let array4 = [
    [2,4,5],
    [7,8,9],
    [11,12,13]
];

for(let i = 0; i < array4.length; i++){
    for(let j = 1; j < array4[i].length - 1; j++){
            console.log(array4[i][j]);
    }
}