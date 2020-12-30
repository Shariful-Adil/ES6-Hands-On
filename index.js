//* 1.  Template Literals
let firstName = 'Adil';
let lastName = 'Shikder';
let age = 32;

console.log('%cTemplate Literals', 'color: blue'); //? text turn into blue for color and %c
console.log(`${firstName} ${lastName} is turned into ${age} years old in ${new Date().getFullYear()}`);
console.log(`${firstName} ${lastName} is turned into ${age} years old in ${new Date().getFullYear()}.

but he looks 50 because of his over weight`); //? multiline string


//* 2. Destructuring Objects

let personObj = {
    name: 'adil',
    birthYear: 1989,
    emailaAdress: 'adil.ict@gmail.com',
    occupation: 'Job Holder'
}

let { name, birthYear, emailaAdress: email } = personObj; //? shorten emailAddress to email

console.log(`${name}, ${birthYear}, ${email}`);


//* 3. Destructuring Arrays

let [color1, , color3] = ['white', 'black', 'red'];

console.log(color1, color3); //? white, red --- black will not come


//* 4. for of loop (it itterates anything)

var numbers = [100, 200, 300];

for (let n of numbers) {
    console.log(n); // 100,200,300
}

var words = 'this is a cat'

for (let w of words) {
    console.log(w); // t h i s  i s  a c a t
}


//* 4. for in loop (it itterates anything using index)

var numbers = [100, 200, 300];

for (let n in numbers) {
    console.log(n); // 0,1,2
    console.log(numbers[n]); // 100,200,300
}

var words = 'this is a cat'

for (let w in words) {
    console.log(w); // 0,1,2,3,4...........
}


//* 5. Spread operator they are spredaing each item from array and objects
//? array
let number = [1, 2, 5, 7]
console.log(...number) // 1 2 5 7
let numbers2 = [7, 8, 9]
console.log(...numbers2) // 7 8 9
let arr = [...number, ...numbers2, 6, 7, 10]; // 1,2,5,7,7,8,9,6,7,10

//? Object
let person2 = {
    name2: "x",
    age2: 45
}

console.log(person2);
console.log({ ...person2 }); // will give same output
let anotherPerson = { ...person2, nationality: "Bangladeshi" } //? prothome person2 object ta ke vange. er property guloke alada kore then er shathe new property 'nationality' add kore
console.log(anotherPerson);



//* 6. Rest operator (jokhon amra janina function er argument hishabe koto gulo parameter pass kora hobe)

var som = function (...a) {
    console.log(a) // 0: 1, 1: 2 ,2: 3 ---- This is an array
    console.log(arguments) //? same out put. actually amara jodi ...(rest operator) us na kori arguments diyeo same kaj kora jay.  function(a) te (1,2,3) pass korle a er value ashbe 1 but arguments er value ashbe ... er moto

}

som(1, 2, 3)



//* 7. Arrow Function

function Normal(param1, param2) {

    return param1 * param2;
}

var fucn = function (param1, param2) {

    return param1 * param2;
}
var res = Normal(1, 2);

var arrow1 = (param1, param2) => param1 * param2; // arrow function eliminate function syntax and put it after parameter as => (arrow)
console.log(arrow1(3, 6));

var arrow2 = param1 => param1 * 6; // if single parameter then no need to enclose with brackets
var arrow3 = (...param1) => { // when need multiple lines then have to use curly brackets
    for (let i of param1) {
        console.log(i);
    }

    param1.forEach(element => {
        console.log(element);
    });
    // same
    param1.forEach(function (el) {
        console.log(el);
    });

};

console.log(arrow3(1, 2, 3));


//* 8. Default Params

var defaultExample = function (param1 = 1, param2 = []) { //? default value will be passed if not provided

    console.log(param1, param2);
}
defaultExample();

// * 9. Includes return true false based on value

var array = [1, 2, 3]
console.log(array.includes(1)); // true
console.log(array.includes(19)); // false
var str = 'adil';
console.log(str.includes('a')) // true
console.log(str.includes('ad')) // true
console.log(str.includes('d')) // true
console.log(str.includes('e')) // false
console.log(str.includes('')) // true
console.log(str.includes(' ')) // false



//* 10. let and const

//? let is block scope but var is fuction scope. they hoisted differently.

if (false) {
    var abc = 10;
}
console.log(abc); //? undefined. coz when javascript run it hoisted abc and set its value to undefined. if IF blocks return true then set value to 10; but its confusing. let overcome it

if (false) {
    let abc2 = 10;
}
// console.log(abc2); //? you got error here. abc2 not defined

function VarLet() {
    var a = 10;
    if (true) {
        let b = 10 // works only in this {} block
    }
    console.log(a); //? 10. as long function not completed it will be found
    // console.log(b); //? get error of not defined
}

VarLet();
//console.log(a); // get error of not defined
// console.log(b); get error of not defined

//? so what is not defined and undefined* not defined = no variable is declared, undefined = variable is declared but no value is set

for (var index = 0; index < 10; index++) {
    console.log(index); // 1 to 9

}

console.log(index); //? 10 because var is function scope. here no function is declared so it will be in global scope. but if we put for loop in function then outside of  function index will be not defined

for (let index2 = 0; index2 < 10; index2++) {
    console.log(index2); // 1 to 9

}

// console.log(index2); //? not defined because of block scope. will only found in for loop block


const constantValue = 10; //? always 10 . you cant change it
// constantValue = 11; give error

//? but in array and object you can assign value

const constArray = [];
constArray.push(1);
constArray.push('a');
console.log(constArray);

const constObj = {};
constObj.name = 'adil';
constObj.name = 3;
console.log(constObj);


//* 11. Import and Export - shares code from one file to another

import d, { values, another } from './export.js';
d(); //? print default export . when you export default you can name the import variable as you want. because it will be default exported. but use same name is convention
console.log(values); //? for other import we have to declare same name
another(); //? for woprking with import export we must include "type" : "module" in package.json. otherwise give error


//*  11. PadStart and PadEnd
var xy = 'adil'
console.log(xy.padStart(10, '0')); //? it will put 10 '0' first then from last position put adil -- 0000000000 == 000000adil that means start with 0 or whatever you put
console.log(xy.padEnd(10, '0')); //? it will put 10 '0' first then from first position put adil -- 0000000000 == adil000000 that means ends with 0 or whatever you put

//* 12 . Class

class Car {
    constructor(color, seatcount, speed) { //? you have to use constructor to initialize property. its convention
        this.color = color;
        this.seatcount = seatcount;
        this.speed = speed;

    }
    getSpeed = () => this.speed;
    favourite = 'yes' //? from now even you no need to pass value using constructor

}

var car = new Car('red', 4, 120);
car.isHired = true; // you can assign new property
console.log(car);
console.log(car.getSpeed());


//* 13. In heritance

class Audi extends Car {

    constructor(owner) {
        super(); //? you have to Must call super constructor in derived class before accessing 'this. you can also provide value to base class constructor like super('white')
        this.owner = owner;
    }
}

var audi = new Audi('Adil');
console.log(audi); //? will contain color,seatcount,spedd,favourite,ishired and getspeed() from base class and owner from child class

/// 14. trailing comma (I hate this)

function add(a1, a2,) // trailing ',' is not breaking the code
{
    console.log(a1, a2,); // not even there
}

add(1, 2,); // not even there


//* 15. Async and await

// const apiUrl = 'https://apilist.fun/api/v1/get_companies'
// function asdZ() {
//     fetch(apiUrl).then(t => t.json()).then(j => console.log(j))
// }

// asdZ()

//* Sets lESS IMPORTANT

var sets = new Set([1, 1, 2])
console.log(sets.size) //2
sets.add(1); // 1,1,1,2
console.log(sets.size) //2
sets.add(3); // 1,1,1,2,3
console.log(sets.size) // 3 
console.log(sets.has(2)) // true
sets.delete(3); // 1,1,1,2
console.log(sets.size); //2

// Object literals

function createObj(name, age) {

    return {
        name,
        age,
        getAge() { console.log(age) } // no need to add function like getage: function(){console.log(age)}
    };
}
var ob = createObj('adil', 5);
console.log(ob); // { name: 'adil', age: 5, getAge: [Function: getAge] }
ob.getAge(); //5


//* this key word. when this is called from object or its funtiontion (method) it points the object but in normal function or any other place it points window object

var obj = {
    getvalue() { console.log(this) },
    getValue2() {
        return function normal() { console.log(this); }// this is inside normal function}

    }

}

obj.getvalue(); // obj
console.log(this) //? window but whenever strict mode is enabled then it provides undefined
var normalFunc = obj.getValue2();
normalFunc();//? window but whenever strict mode is enabled then it provides undefined

// ?but how we can access obj this in normal function

var obj = {
    getvalue() { console.log(this) },

    getValue2() {
        var self = this;
        return function normal() { console.log(self); }// this is inside normal function}

    }

}
var normalFunc = obj.getValue2();
normalFunc(); // object

//? but we can overcome extra self using arrow function


var obj = {
    getvalue() { console.log(this) },

    getValue2() {
        return () => console.log(this); // this is inside normal function
    }
}
var normalFunc = obj.getValue2();
normalFunc(); // obj