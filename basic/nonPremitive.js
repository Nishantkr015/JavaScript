const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
console.log(typeof id);

// non premitive data type
//array 

const heroes = ['nishant', 'nishu', 'ishant']
console.log(typeof heroes);
console.log(heroes);

//object 

let myObj = {
    name: "nishant",
    age : 26
}
console.log(myObj)

//function

let Myfunction = function()
                {
                    console.log("hello world");
                }
console.log(typeof Myfunction);