

//IF statements
let numA = 3;
let numB = 6;
if(numA<numB){
    console.log(`if block executed`);
}else if(numA>numB){
    console.log(`elseif block executed`);
}else{
    console.log(`else block executed`);
}
//ternary operator
console.log(2>3?true:false);


//Type Conversion
    //THis is a manual approach but in real case will use Type coercion
let a = "234";
let b = 56;
let c = "check";
//string to number
console.log(a+b);//retuns 23456
console.log(Number(a)+b); //retuen 290
console.log(Number(c));     //return NaN (Not a Number)
//number to string
console.log(String(b)); //retuns number in string datatype

//Type Coercion
    //JS can do automatic conversion based

console.log("ram" + 23); //automactically converts number 23 into string 23
console.log("23" + 23);   //this case all are converted to string
console.log("23"- 23);  //this case all are converted to number, same for the case of multiplication, division