/*
    A value is everything in JS.
    Dynamic typing - we dont need to type the datatype of the variable, instead JS will decide the datatype based on value stored in variable
    A value can be wither Object or Primitive datatypes
    There are total 7 primitive datatypes
        1. Number - all the number are considered as a float and there are no other number types
        2. String - group of characters. Use either single or double quotes to create a string; or else we will get "Uncaught ReferenceError: abc is not defined" in console
        3. Boolean - true or false
        4. Undefined
        5. null
        6. Symbol
        7. bigint
  
 

let a = 23;
let b = "ram";//use quotes, else ReferenceError will be thrown
let c = true;
console.log(a);
console.log(typeof a);  //will print "number" in console
console.log(b);
console.log(typeof b);  //will print "string" in console
console.log(c);
console.log(typeof c);  //will print "boolean" in console

let d;
console.log(d);         //will print "undefined" in console
console.log(typeof d);  //will print "undefined" in console

console.log(null);          //will print "null" in console
console.log(typeof null);   //will print "object" in console, but this is issue in JS, which is not fixed due to some legacy issues
let e = null;
console.log(e);         //will print "null" in console
console.log(typeof e);  //will print "object" in console, but this is issue in JS, which is not fixed due to some legacy issues
*/
/*
    let, var, const
    let and const are introduced in modern JS 2016
    var is a old way to define

    We can declare variables even without mentioning let/const/var, but this will create global variable, instead of creating in current scope
    
    On defining a variable as let, it will let us to do mutate
    on defining a variable as const, it cannot be altered


let age = 34;
age = 35; //mutation possible
const gender = "male";
//gender = "unknown"; //it will throw TypeError, since const cannot be altered
//const country;      //it will throw SyntaxError, since const value cannot be changed, we have to assign some value at the time of declaration
var phNumber = 5676;
phNumber = 867867;     //var is somewhat similiar to let, but there are some difference.  
*/


//Operators

const a = 13;
const b = 3;
const c = "amer";
const d = "ica";
let e = 10;
//assignment operators
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b); //Exponential operator - power operator
console.log(c + d + a + b);       //returns america133
console.log(c + d + (a + b));     //returns america16
e += 5;
e -= 1;
e++;
e--;
++e;
--e;
console.log(e)
//Comparison operator
    //    <,>,<=,>=,!=


//operator precedence
    //Refer below URL for the precedence in Javascript
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence












