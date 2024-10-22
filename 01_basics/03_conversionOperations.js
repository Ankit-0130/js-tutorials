let score = "33";
console.log(typeof score);

let valueInNumber = Number(score) 
console.log(typeof valueInNumber);  // if text in string then it is valued as NaN , and null to 0, undefined to Nan
//for boolean 0 & 1 respective  of boolean values 

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true    0 => false
// "" => false
// "ankit" => true


let anyNumber = 33
let stringNumber = String(anyNumber)
console.log(stringNumber);

