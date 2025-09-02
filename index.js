  //This is my first Java Script. note better: the console bellow is something you need to bring everytime you coding.
        console.log('Hello World');

let name = 'Reginatia'; //this is a string literal. (is under primitive type tho)
console.log(name);

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

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//types of values to assign to variables,
// in js we have 2 types, this is a primitive or values types, 
// and reference types.

//Primitive Type
let age = 18;//this is a number literal
let isApproved = false; //Boolean literal
let firstName = undefined;
let selectedColor = 'null';//we use this if we wanna clearn the value of a variable

//This is Reference type
let person = {
    name: 'Reginatia',
    age: 18
};

//there are two ways to access this property,
//1. Dot Notation
person.name = 'Bo gum';

//Bracket Notation
person['name'] = 'Taek';
console.log(person.name);

//we are moving to Arrays
let selectedColors = ['red', 'grey'];
selectedColors[2] = 'blue';
//the red has an index of 0 and the grey as 1.
//therefore in the console you have to choose the type of index you wanna specify
console.log(selectedColors[2]);// this indicate that we have chosen index 1 which is grey, 
                          // so that is what is going to show on the console
                          //if you want all to be distrubuted then there is no need to add the bracket, 
                          //to demonstrate which should pop up on the console

//An Array is a data structure that we use to represent a list of items.

//This is FUNCTIONS place
//for functions you dont need to add ; at the end, that is only use for variables


//this is a type of function performing a task
function greet (name) {
    console.log('Hi' + name);
}
greet('futre journey');
greet('the God that will help me through this journey');


// this is calculating a value
function square (number) {
    return number * number;
}

let number = square (2);
console.log(number);