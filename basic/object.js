//object literals
const mySym = Symbol("key1"); //symbol value


const JsUser = {
    name: "Nishnat",
    "full name" : "nishant kumar",
    age: 26,
    email: "nishant@google.com",
    location: "Hyderabad",
    isLocation: false,
    lastLoginDay: ["Monday", "Saturday"],
    [mySym] : "myKey1"
}

//two way to access object values 
console.log(JsUser.email); // using dot  
console.log(JsUser["email"]); //using [ with dobble coma]
console.log(JsUser["full name"]);

//how to access/print symbol value:


//mySym : "myKey1"
//console.log(typeof JsUser.mySym); //its not symbol, its is treaed as string

//[mySym] : "myKey1" :  declaration matters, this is Symbol
console.log(JsUser[mySym]); //use [] to make it Symbol type

 

