
/**let price = 43.5;
let total = Number.parseInt (price.toString(), 10);
console.log(total);

let weight = 60.5;
let weightStr = weight.toString();
console.log("weightStr:" ,weightStr);

let normal = Number.parseInt(weightStr, 10);

let avg = Number.parseFloat(weightStr);
console.log ("avg:" , avg);
console.log("normal:"  , normal);
 */



/**
 * parseInt chops the decimal part; it does not round but its just ignores the decimal part
 * it does not cares about the number of decimal places
 *
 * it works wheen you want to convert string numbers into intergers
 * when you just want to have int,
 * the difference with Math.round
 */
const a = "5060" ;
const b = "4060";
let sum1 = +a + +b;
/*
another way of it
let sum = Number (a) + Number(b)


Number - converts the entire value to a number.
 */
console.log (sum1);

/*
parseInt; using it to get the int part
 */
const d = 45.23;
const e = 44.96;

let sum2 = parseInt(d) + parseInt(e);
console.log(sum2);
/*
rounds up the decimal
 */
console.log(Math.round(d +e));
/*
parseInt to convert the string to Numeric Int
 */
const f = "345";
const g = "556";
let sum3 = parseInt(f) + parseInt(g);
console.log(sum3);


