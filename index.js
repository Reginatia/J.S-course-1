  //This is my first Java Script. note better: the console bellow is something you need to bring everytime you coding.
        console.log('Hello World');

let name = 'Reginatia'; //this is a string literal. (is under primitive type tho)
console.log(name);

//this is basic code structure
console.log("I am learning Java Script");

console.log("My name is Reginatia")
console.log("I'm 18 years")
console.log("I'm a student")
console.log("Computer science is what i want to study at university")

//this is a variable
let message = "Hello World!";
console.log(message)

message = "Nice weather!"
console.log(message)
message = "behaving like the girl i want to be is something that am setting my mind on from today"
console.log(message)

let myinformation = "my occupation as my own is to win";
console.log(myinformation)

//this is a string
//it worked by using enclose in quotation and it should be the same
//you can join different things with the + sign.
let mine = "Regi " + "and " + "her God!";
console.log(mine)

let future = "i am following the process " + "and " + "i will win!";
console.log(future)

let study = "I will win!";
console.log("the message is: " + study)

//putting strings in one console.log
let firstName = "Reginatia";
let topic = "JavaScript";
console.log(firstName + " is learning " + topic + " rightnow");

//this is for numbers.
//for numbers we have two things, we have the integers and the float
//integer is a whole number without decimals and basically indicating the arithmetric sign in the console. Example;
let x = 2;
let y = 3;
console.log(x+y);
//and for float, it ia basically a decimal, like adding . example;
let f = 1.2;
let z = 1.3;
console.log(f+y);

//this is boolean. it stand in two position, whether true or fals, or on and off
let on = true;
let off = false;

//undefined. it is used to represent varibale that hasn't been assigned to any value.
//example;
let first_nam;
//console.log(first_name)

//Null. it ia a special value that is used to represent  an empty or unknown value
//example
let first_name = null;

//this is type conversion amd coercion
//this is all or basically about changing string into an interger. example;
let m = "2";   //this is basically a string cox it is enclose with quotation
let n = 4;     //this is an integer because it has no decimals

//change m to integer
//m = number(m);
console.log(m+n);

//this is type coerrcion
console.log(2+"3");

//this is operators in JS
//this part is the arithmetic operators.
console.log(2 - 1);
console.log(3 * 2);

//this is assignment operator
let AO = "Hello";  //for this we assign the string value 'Hello'to the 'message' variable

let On = true;  //this is assigning the boolean value true to the 'on' variable

//this is comparison operators
console.log(9 == 9);
console.log(9 != 9);
console.log(2 > 10);

//this is Logical operation. 
//it is used to check whether one or more expressions result in either true or false. e.g;
console.log(7 > 2 && 5 < 7);
//example;
console.log(true && false);
console.log(false || false);
console.log(!true);

//this section is typeof operators. you shoukd call the data before specifying it.
let k = 5;
console.log(typeof k);
console.log(typeof "Nathan");
console.log(typeof true);

//Exercise #3
console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false);


//This is Arrays, and position of arrays
let birds = ['owl', 'Eagle', 'Parrot', 'Falcon'];
console.log(birds[0]);
console.log(birds[2]);
//Note:
//Array index always starts from 0

//this part is about replacing a position of something with an array
let waldAnimals = ['lion', 'elephant', 'tiger'];
waldAnimals[1] = 'giraffe';
console.log(waldAnimals);



















//for the name in js it (1)cannot be a reserved keyword, 
// that is why the let is showing red, making it undefined,
//not only let like, if, else. (2)it should be a meaningful and 
//descriptive names. (3)cannot start with a name.
//(4)cannot contain a space or hyphen (-)
//note: the first word should be in small letter and the second 
//word that follows should be in capital letters.e.g firstName.
//(4)they are case-sentitive.
//like when you type, let firstName = 'Regi'; (after this don't 
//dont continue lastName here, it should be seprted)
//let lastName 'Amoah'; (it should be on a new line)

//THIS SECTION IS CONSTANT


//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

//types of values to assign to variables,
// in js we have 2 types, this is a primitive or values types, 
// and reference types.

//Primitive Type
//let age = 18;//this is a number literal
//let isApproved = false; //Boolean literal
//let firstName = undefined;
//let selectedColor = 'null';//we use this if we wanna clearn the value of a variable

//This is Reference type
//let person = {
    //name: 'Reginatia',
    //age: 18
//};

//there are two ways to access this property,
//1. Dot Notation
//person.name = 'Bo gum';

//Bracket Notation
//person['name'] = 'Taek';
//console.log(person.name);

//we are moving to Arrays
//let selectedColors = ['red', 'grey'];
//selectedColors[2] = 'blue';
//the red has an index of 0 and the grey as 1.
//therefore in the console you have to choose the type of index you wanna specify
//console.log(selectedColors[2]);// this indicate that we have chosen index 1 which is grey, 
                          // so that is what is going to show on the console
                          //if you want all to be distrubuted then there is no need to add the bracket, 
                          //to demonstrate which should pop up on the console

//An Array is a data structure that we use to represent a list of items.

//This is FUNCTIONS place
//for functions you dont need to add ; at the end, that is only use for variables


//this is a type of function performing a task
//function greet (name) {
    //console.log('Hi' + name);
//}
//greet('futre journey');
//greet('the God that will help me through this journey');


// this is calculating a value
//function square (number) {
    //return number * number;
//}

//let number = square (2);
//console.log(number);

//this is a new part from freecode camp

