const accountId = 144553
let accountEmail = "Manish129@gmail.com"
var accountPassword = "1234"
accountCity = "Rajasthan"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212526"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

