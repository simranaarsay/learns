/**
 * object is creation of key value properties
 * created an object with properties for breed
 * colour , age, weight, favFood, owner ,name
 * @type {{breed: string, colour: string, age: number, weight: number, favFood: string, owner: string, name: string }}
 */

let dog = {
    breed: "corgi",
    colour: "brown",
    age: 2,
    weight: 4.5,
    favFood: "sausages",
    owner: "king",
    name: "albert",
};
/**
 * deletes 'owner' property from the dog object
 */
delete dog.owner;
/**
 * using parseInt to convert the weight of albert to an integer
 * parseInt to drop .4 and keep the
 * int part
 * @type {number}
 */
let weight= parseInt(dog.weight);
console.log(dog);
console.log(weight);

/**
 * Array of dog breed
 */

let breed2 = ["german shepard", "labrador", "husky", "bulldog", "shih zhu"]

/**
 * Replaces the third element in the above array with "siberian husky"
 * @type {string}
 */
breed2[breed2.length  - 3] = "siberian husky";

console.log(breed2);

/**
 *using shift() to remove the first element from fruit array
 * and push() to add to produce array.
 */
let fruit = ["bananas", "mango", "papaya", "graps", "strawberry"]
let produce = [ ];
let first = fruit.shift();
console.log(first);
produce.push(first);

console.log(fruit);
console.log(produce);

