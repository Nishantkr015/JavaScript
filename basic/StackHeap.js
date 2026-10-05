//stack : works on copy of stack value
let myYoutube = "nishantTechdotcom"
let anotherYoutube = myYoutube

//changing the value of anotherYoutube variable
anotherYoutube = "ishandotcom"

console.log(myYoutube);
console.log (anotherYoutube);

// non premitive  :heap (reference value)
let userOne = {
    email : "nishant@gmail.com",
    name : "nishant"
}
let userTwo = userOne
userTwo.email = "ishan@gmail.com"

console.log (userOne.email);
console.log (userTwo.email);