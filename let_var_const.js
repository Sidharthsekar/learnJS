
aaa();
function aaa(){


    //console.log(babyAge)
//let babyAge = 1;
let isBirthday = true;
if (isBirthday) {
    let babyAge = 2; 
}
console.log(babyAge); // Ah! This prints 1

}
/*
Const and let
    Let and const are hoisted, but in a different memory, this is called temporal dead zone (TDZ)
    Until the execution of line where let and const declared, this remains in TDZ and cannot be accessed
    if we access let and const before declared like "console.log(a);let a=4; ", throw "ReferenceError: Cannot access 'a' before initialization"
    both let and const cannot be declared more than once, var can be declared more than once
    const and let have block scope, whereas var is function scope
        var babyAge = 1;
        var isBirthday = true;
        if (isBirthday) {
	        var babyAge = 2; 
        }
        console.log(babyAge); // Ah! This prints 2
        let babyAge = 1;
        let isBirthday = true;
        if (isBirthday) {
	        let babyAge = 2; 
        }
        console.log(babyAge); // Ah! This prints 1
    In const, This should always declared with initializer or else we will get "SyntaxError: Missing initializer in const declaration"
    Updating a const with new value like "const a = 0; a =1;" will throw "TypeError: Assignment to constant variable."

    */