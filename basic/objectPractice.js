//creating object
const objOne = {
    name:"nishant",     // string value 
    age: 18,           // number
    Islogedin : false, // boolean
    city: "hyd",
    array:["nishant", "kumar", "ishan"], // array
   
     address: {   // nested object
         city: "Hyderabad",
         state: "Ts"
     }

 }
// //operation on object 

// //adding new key
// objOne.hobby = "reading";
// console.log(objOne);


// //changing value
// objOne.hobby="singing";
// console.log(objOne);


// //deleting key
// delete objOne.city;
// console.log(objOne);

// accessing nested object
console.log(objOne.address.city);
//or
console.log(objOne["address"]["city"]);
console.log(objOne["address"]["state"]);
