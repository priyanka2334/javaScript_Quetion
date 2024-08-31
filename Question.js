

//2. Remove duplicates from an array.

// let arr = [1,2,3,4,5,3];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]!=-1){
//         let c = 1;
//         for(let j = i+1; j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 arr[j]=-1;
//                 c++;
//             }
//         }
//         if((c>1)){
//             console.log(`${arr[i]} ${c} `);
//         }
//     }
// }



//3. Write a function to sort an array of integers in ascending order.

// let arr = [4, 7, 2, 9, 1, 0, 10, 3, 13];
// arr.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr);




//4.  Write a function to search for a given element in an array and return its index if found, otherwise return -1.

//5. Take a 3 digit number and print the reverse of that number.

// let n = 123;
// let sum = 0;
// while(n>0){
//     let a = n % 10;
//     sum = sum * 10 + a;
//     n = Math.floor(n / 10);
// }
// console.log(sum);



//6. Take a number and return the sum of the first and last digit.

// let num = 1234556;

// let l = num % 10;
// let f = num;
// while(f>=10){
//  f = Math.floor(f/10);
// }
// let sum = l+f;
// console.log(sum);



/////7. Take two numbers and swap them.

// let a = 10;
// let b = 20;

// let temp = a;
// a = b;
// b = temp;
// console.log(a , b);


////////////////////////8. Reverse a string.

// let str = "priyanka";
// let rev = str.split('').reverse().join('');
// console.log(rev);



////////////9. Swap two number without using third variable.

// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);




/////// 10. Write a function that takes a string and returns it with the first letter capitalized.

// let str = "priyanka";
// if(str.length>0){
//     let cap = str.charAt(0).toLocaleUpperCase()+str.slice(1);
//     console.log(cap);
// }else{
//     console.log(str);
// }


//////11.  Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

// let str = "boa";
// let rev = str.split('').reverse().join('');
// if(str===rev){
//     console.log("yes")
// }else{
//     console.log("No");
// }

///////12.  Write a function that counts the number of vowels in a given string.

///////////////////////13.  Find the Largest Number in an Array.

// const arr = [12, 34, 56, 67, 89, 87, 97];
// const max = Math.max(...arr); 
// console.log(max); 


// const arr = [12,34,45,56,67,89,90,98];
// let l = arr[0];
// for(let i = 0; i<arr.length; i++){
//     for(let j = i+ 1; j<arr.length; j++){
//         if(arr[i]<arr[j]){
//         l = arr[j];
//         }
//     }
// }
// console.log(l);


//14.  Write a function that generates and returns a random number between 1 and 100.

// console.log(Math.random()*100);


/////15.  Write a function that calculates the sum of all elements in an array.

// let arr = [1,2,3,4,5,6];
// function sum(num,num1){
//     return num + num1;
// }
// console.log(arr.reduce(sum));


// let arr = [1,2,3,4,5,6,7];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);


///////16. Write a function that sorts an array of numbers in ascending order.

// let arr = [12,43,78,90,1,2,0,5];
// arr.sort(function(a,b){
//     return a - b;
// })
// console.log(arr);

//////19. Write a function that calculates the factorial of a given number.

// let num = 146;
// let sum = 0;
// let fact = 1;
// while(num>0){
//     let a = num % 10;
//     let i = 1;
//     while(i<=a){
//         fact = fact * i;
//         i = i + 1;
//     }
//     sum = sum + fact;
//     num = Math.floor(num / 10);
// }
// if(num==sum){
//     console.log("Yes");
// }else{
//     console.log("NO");
// }



//////20.Write a function that checks if a given number is even or odd.

// function odd(num){
//     if(num%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// odd(13);



// console.log(Math.random()*100);
// let text = "priyanka";
// console.log(text.repeat(5));

// let arr = [1,2,3,4,5,67];
// arr.push(56);
// console.log(arr);

// let arr1 = [1,2,3,4,5,6];
// arr1.pop();
// console.log(arr1);

// function name(nam){
//     console.log("hello" + nam);
// }
// setInterval(name,1000,"priyanka");


// let arr = [1,2,3,4,5,6,7];
// function sum(ele){
//     return ele *2;
// }
// console.log(arr.map(sum));

// let arr = [12,34,45,67,89,90];
// function fil(num){
//     return num>12;
// }
// console.log(arr.filter(fil));

// console.log(a);
// function na(){
//     console.log("hello world");
// }
// let a = 9;


// let arr = [1,2,3,45,67,];
// function sum(num , num1){
//     return num + num1;
// }
// console.log(arr.reduce(sum));


// const person = {
//     firstName: "priyanka",
//     lastName: "Diwakar",
//     address:{
//         age: 20,
//         class: 12,
//     }
// }
// person.location = "pune";

// Object.freeze(person);
// console.log(person);


// function user(name,cls,age){
//     return{
//     name: name,
//     age: age,
//     cls: cls
//     };
// }
// console.log(user("priyanka",20,12));


// function user(name,cls,age){
//     this.name=name;
//     this.age=age;
//     this.cls=cls;
// }
// let mam = (new user("priyanka",20,12));
// console.log(mam);


 ////////////////////////////////////////////////////////////////// deep copy

// function createUser() {
//     return {
//         name: "priyanka",
//         age: 20,
//         clas: 12,
//         country: {
//             name: "india"
//         }
//     };
// }

// let user = createUser();
// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);

///////////////////////////////////////////////////////////////// shallow copy
// const user = {
//     name: "priyanka",
//     age: 20,
//     clas:12,
// }
// let user1 = {...user};
// console.log(user1);



// console.log((function sum(a, b) {
//     return a + b;
// })(2, 3));


// callback and Higher-Order function


// function add() {
//     return 4;
// }
// function addition(callback) {
//     return callback();

// }
// console.log(addition(add)); 


// function greet(name){
//     console.log("Hello"+ name);
// }
// clearInterval(greet,1000,"priyanka");

