//
//let's say i own a bakery


//set price for each items.

const itemsPrice =  {
    bread: 4.23,
    icecap: 2.00,
    frappe: 4.00,
    latte: 3.00,
    brownbread: 7.00,
    espresso: 1.23,
}

const tax = 0.07;

let customerName = "janice";

let amountJanice = (itemsPrice.bread + itemsPrice.espresso) ;
let totalAmount = amountJanice * tax ;

let totalWithTax =  amountJanice +totalAmount;

console.log(amountJanice);

console.log(totalAmount);

console.log(totalWithTax);



