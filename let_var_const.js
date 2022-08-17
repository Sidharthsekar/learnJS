
var a;
console.log(b);
let b;
console.log(b);

//Const and let
    //Let and const are hoisted, but in a different memory, this is called temporal dead zone (TDZ)
    //Until a value is initialized to let, this remains in TDZ and cannot be accessed(for const, you cannot declare without a initializer)
    //both let and const cannot be declared more than once, var can be declared more than once

//Let
    //if we access let before initialized like "let a; console.log(a);", 
//Const
    //This should always declared with initializer or else we will get "SyntaxError: Missing initializer in const declaration"
    //Updating a const with new value like "const a = 0; a =1;" will throw "TypeError: Assignment to constant variable."