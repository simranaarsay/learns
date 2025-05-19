//const -- when the value assigned to a variable, is not to be reassigned.
//property inside of it can be changed, however the address will stay the same.


const one = 'blue';
const two = 'red' ;
const three = 'white';

let flag = "russia";

console.log(one,two);

const user = {
    //variable user will always have the same address, the properties of this can be changed.
    //like we just did.

    batch1: 'Cakes',

    batch2: 'bread',

    batch3: 'whippedcream',
//re assigned the value
    batch1 : 'fruits',
// cant do
//user = shop ;
};

console.log(user.batch1);




