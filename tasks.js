//a value for kelvin is created
let kelvin = 0;
//value of celsius is 273 less than kelvin
let celsius = kelvin - 273;
//formula to covert celsius to fahrenheit is (celsius * (9/5)) + 32
let fahrenheit = (celsius * (9/5)) + 32 ;
//Math.floor() ensures a value without fraction
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`);
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.
`);

//Dog Years
// variable named myAge has been assigned
let myAge = 23;
// variable named earlyYears has been assigned ans set to 2
let earlyYears = 2;
earlyYears *= 10.5;
// variable named laterYears has been set to the result of myAge-2
let laterYears = myAge - 2;
// variable laterYears has been multiplied by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// variable named myAgeInDogYears has been set to the summation of earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;
// a string has been assigned to myName which will be printed in lowercase letter
let myName = "Rahul".toLowerCase();
// all the variables hass been printed using string interpolation method
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);