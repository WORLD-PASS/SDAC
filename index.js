// class BankAccount{
//     accountNumber;
//      accountHolder;
//     balance;

//     constructor (accountNumber,accountHolder,balance){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     displayinfo(){
//         console.log("name"+":"+this.accountHolder+"  "+"no"+":"+this.accountNumber+"  "+"balance"+":"+this.balance);
        
//     }
//     deposit(amount){
//         this.balance +=amount;
//     }
//     withdraw(amount){
//         this.balance -=amount;
//     }

//     displayBalance(){
//         console.log(this.balance);
        
//     }

// }


// const tom = new BankAccount(1001,"tom",10000);

// tom.displayinfo();
// tom.displayBalance();
// tom.deposit(1000);
// tom.displayBalance();
// tom.withdraw(500);
// tom.displayBalance();


// const arr = [10,20,30,40,50,60]

// console.log(arr);

// // console.log(arr.splice(0,1,2));

// const [a1 , a2] =arr

//     console.log(a1);
//     console.log(a2);
    
    // const Emp ={
    //     id :1001,
    //     name : "tom",
    //     sal : 25000

    // }

    // const {id , name ,sal} = Emp;

    // console.log(id);
    // console.log(name);
    // console.log(sal);
    
    
    
//     const arr = [10,20,340,24,45,1234];

//   function displaymax(arr){
//         console.log(Math.max(...arr));
        
//     }

//     displaymax(arr);

// function greetings(name="aandy"){
//     console.log("greeting"+"  "+name);
    
// }

// greetings("tom");
// greetings();


// function add(a1,a2=10) {
//     console.log(a1+a2);
    
// }

// add(10);
// add(18,12);


// try {
//     console.log(i);
    
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
    
    
// }


// function age(a){
    
//         if (a<18) {
//            throw new Error("enter validage");

//     } 
// }
//     try {
//         age(a<18);
//         age(a>60);
//     } catch (error) {
//         console.log(error.a);
//         console.log(error.message);      
//     }
    
// age(15);


// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allow");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 2));
//   console.log(divide(10, 0)); 
// } catch (error) {
//   console.error("Error caught:", error.message); 
// }

// class InvalidSalError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidSalError";
//   }
// }

// class InvalidUsernameError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidUsernameError";
//   }
// }


// function setEmployeeSal(salary) {
//   if (salary < 0) {
//     throw new InvalidSalError("Salary cannot be less than zero.");
//   }
//   return `Salary set to $${salary}`;
// }

// function validateUsername(username) {
//   if (!username || username.trim().length < 3) {
//     throw new InvalidUsernameError("Username must be at least 3 characters long and cannot be empty.");
//   }
//   return "Username is valid!";
// }


// function first() {
//   throw new Error(" first()!");
// }

// function second() {
//   first();
// }

// function third() {
//   try {
//     console.log("third() is initiating");
//     second();
//   } catch (error) {
//     console.error("Caught error in third():", error.message);
//   }
// }
// third();


// function validateAge(age) {
//   if (age < 18) {
//     throw new Error("Age restriction: User > 18 years old.");
//   }
//   return true;
// }

// function registerUser(age) {
//   try {
//     validateAge(age);
//     console.log(`Success: age ${age} registered successfully.`);
//   } catch (error) {
//     console.error("Handling error in registerUser():", error.message);
//   }
// }
// registerUser(16); 
// registerUser(22); 




import { add, subtract, multiply, divide } from './calculator.js';

console.log("Addition (10 + 5):", add(10, 5));         

console.log("Subtraction (10 - 5):", subtract(10, 5));   
console.log("Multiplication (10 * 5):", multiply(10, 5)); 

console.log("Division (10 / 5):", divide(10, 5));         
