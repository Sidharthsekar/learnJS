let strings = 'honey';
let numbers = 234;
let isIt = true;
let nullValue = null;
let undef = undefined;


console.log(typeof strings)
console.log(typeof numbers)
console.log(typeof isIt)
console.log(typeof nullValue)  //this return type as object instead of null
console.log(typeof undef);


//console.log(notdeclaredVariable)  //reference error if not declared
console.log(typeof notdeclaredVariable) //type is undefined

function abc() {
    console.log(numbers)
    let numbers = 45;
    console.log(numbers)
}
abc();
console.log(numbers)
