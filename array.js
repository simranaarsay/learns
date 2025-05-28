
let squares = [2,9,5,8,9,12,34]
console.log("length of array", squares.length);

let k = 0;
for (let x = 0; x <squares.length; x++) {
    console.log("x: ", x, " square element at index x: ", squares[x])
    k = k + squares[x]

}
console.log (k)