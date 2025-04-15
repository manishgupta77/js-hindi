const name = "manish"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('manish-hc-com')
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  manish  "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://manish.com/manish%20gupta"

console.log(url.replace('%20', '-'))
console.log(url.includes('manish'))

console.log(gameName.split('-'));