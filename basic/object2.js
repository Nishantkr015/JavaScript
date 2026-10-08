const tinderUser = new Object();
//or 
//const tinderUser = {}

tinderUser.name ="nishant"
tinderUser.id = "123abc"

//console.log(tinderUser);

//how to merge two object
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

const objSum = { obj1, obj2, obj3}
//console.log(objSum); // this is problem we cant write like this

// const objTotal = Object.assign ({}, obj1, obj2, obj3);
// const objTotal = { ...obj1, ...obj2, ...obj3};
// console.log(objTotal);

console.log(tinderUser);

// we cann access keys and value from o=object and it will retun in array form

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));



