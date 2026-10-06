//just printing Array
const myArr = [0, 2, 3, 4, 5, 6]
console.log("A : ",myArr);

//applying slice
const myn1 = (myArr.slice(1,3));
console.log("slice Array :", myn1);
console.log("A : ", myArr);

//applying splice
const newArr2 = (myArr.splice(1,3));
console.log("splice Array :", newArr2);
console.log("A : ",myArr);