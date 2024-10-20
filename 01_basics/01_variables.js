//const cannot be changed 
const accountId =14456

let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId=2      This cannot be done . Error : Assignment to constant variable

accountEmail = "gfgf@email.com"
accountPassword ="5678"
accountCity ="Bangaluru"
console.log(accountId);

/*
Prefere not to use var ,
beacuse of issue in block scope and functional scope  
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
