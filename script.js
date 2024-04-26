//to print anything
console.log("Hello"); //Hello

let myName = "Harish";
console.log(typeof myName); // string

let myNumber = 20;
console.log(typeof myNumber); //number

let myBoolean = true;
console.log(typeof myBoolean); //boolean

let myNull = null;
console.log(typeof myNull); // object it is a error in javascript

let myUndefined;
console.log(typeof myUndefined); //undefined

var varProblem = "Harish";
var varProblem = "varProblem"; // what if the code is bigger and mistakenl we gave same name it can hamper thee logic so dont use this keyword to declare the variable
console.log(varProblem); // varProblem

let myLet = 20;
//let myLet  = 300; // error becausse same name let variable cant de declared again, to change value see below
myLet = 30;
console.log(myLet); //30

const myConst = 55;
//myConst = 54; //error because assignment to constant variable
console.log(myConst); //55

//TYPE CONVERSION

//implicit-automatic

let result = "3" + 2; //32 // automatic conversion from number to string using + operator it is also used to concatenate too
console.log(typeof result); //string

let result1 = 2 + "3";
console.log(result1); //23
console.log(typeof result1); // same here again to string

let result3 = "3" - 1;
console.log(result3); // 2
console.log(typeof result3); //opposite, conversion to the number

let result4 = "3" - "Hello";
console.log(result4); // Not a Number
console.log(typeof result4); // Number

let result6 = 3 - true;
console.log(result6); // 2
console.log(typeof result6); // number

let result7 = 3 - "true"; // here we take true as a string
console.log(result7); // 2
console.log(typeof result7); // number

//explcit-manually

let result5 = 4;
result5 = String(result5); // this is how we do explicit casting
console.log(result5); // 4
console.log(typeof result5); // string

let result8 = null;
result8 = Number(result8);
console.log(result8); //0  because null represents 0 is numeric
console.log(typeof result8); //number

let result9 = 20.355;
result9 = parseInt(result9);
console.log(result9); // 20 because converted to number
console.log(typeof result9); // number

let result10 = 20.355;
console.log(typeof result10); // number
console.log(result10);
result10 = parseFloat(result10);
console.log(result10); // 20 because converted to number
console.log(typeof result10); // number, because include float and integer too

//OPERATORS

//arithmetic

console.log(3 + 5); //8 //3 plus 5 which returns addition
console.log(3 - 5); //-2 //3 minus by 5 which returns subtraction
console.log(3 * 5); //15 // 3 multiplied by 5 which returns multiplication
console.log(3 / 5); //0.6 // 3 divided by 5 which returns quotient
console.log(3 % 5); //3  // 3 modulous 5 which returns remainder
console.log(3 ** 3); //27 // 3 to the power 3

//increment/decrement operator

let aNumber = 5;
console.log(aNumber++); // first print then increment also known as post increment // 5
console.log(aNumber); // 6

let aNumber1 = 6;
console.log(++aNumber1); // first increment then print also known as pre increment // 7
console.log(aNumber1); // 7

let aNumber2 = 55;
console.log(--aNumber2); // pre decrement first and then print // 54

let aNumber3 = 88;
console.log(aNumber3--); // post print then decrement // 88
console.log(aNumber3); //87

//comparison operator
// it always return true or false according to the condition

let compare1 = 2;
let compare2 = 3;

console.log(compare1 == compare2); // false  // equals equals
console.log(compare1 > compare2); // false   //  greater than
console.log(compare1 < compare2); // true    // less than
console.log(compare1 >= compare2); // false   // greater than equals to
console.log(compare1 <= compare2); // true   // less than equals to

// problem with equals equals operator

let compare3 = 3; //number
let compare4 = "3"; // string
console.log(compare3 == compare4); // it is returning true even if it is false because datatype is different // true
// to solve this issue use === // tripel equal to operator it checks datatype too
console.log(compare3 === compare4); // false

console.log(compare3 == compare4); //true
console.log(compare3 === compare4); //false
console.log(compare3 !== compare4); //true this operator check if it is equal or not without performing type conversion
// if values are of two different type they are considered unequal and !== operator returns true if same type whether they are equal in value or not the !== returns true if equals return false

let compar3 = 5; //number
let compar4 = "4"; // string
console.log(compar3 !== compar4); // true

// Logical Operators
//check below to see how to use logical operator
// use to perform logical operation on the boolean values

console.log(3 > 2 || 3 < 3); // logical or returns true of one the condition is true otherwise false // true
console.log(3 > 2 && 3 < 3); //logical and returns false of one the condition is false otherwise true // false
console.log(!true); //false // this operator reverse the true to false and false to true
console.log(!false); //true // this operator reverse the true to false and false to true

//CONDITIONAL STATEMENTS

//if block

let age = 18;
if (age >= 18) {
  console.log("YOU CAN DRIVE..."); // this block will only execute when the condition inside if is true
}

// if - else block

let age2 = 16;

if (age2 > 18) {
  console.log("YOU CAN DRIVE..."); // this block will only execute when the condition inside if is true
} else {
  console.log("YOU CANT DRIVE..."); // this will execute if the condition is false
}

//ladder if block use it when you want to test multiple conditions

let a = 15;
let b = 16;
if (a > b) {
  console.log("A IS GREATER...");
} else if (b > a) {
  console.log("B IS GREATER...");
}

//or you can write else with this too if both the conditions are false

b = 16;
a = 16; // we changed value to check if the else block is executing or not

if (a > b) {
  console.log("A IS GREATER...");
} else if (b > a) {
  console.log("B IS GREATER...");
} else {
  console.log("A AND B IS EQUAL...");
}

//switch statements

let value = 3; // you can use anything here like character or something else

switch (value) {
  case 1:
    console.log("CASE 1");
    break; // apply break or if condition is true here it will execute all the commands below

  case 2:
    console.log("CASE 2");
    break; // apply break or if condition is true here it will execute all the commands below

  default:
    console.log("WRONG VALUE"); // this will execute when all the conditions are wrong like else
    break;
}

// LOOPS // use it when you want to do same tasks again and again

// for loop // it will stop when the condition is false

for (let i = 1; i <= 10; i++) {
  console.log(i); // it will print 1 to 10
}

// backticks `` use it so dont have concatinate by using + again and again
// to print table of 3

for (let i = 1; i <= 10; i++) {
  // console.log("3 x "+i+" = "+3*i);   // it will print 1 to 10
  // backticks `` use it so dont have concatinate by using + again and again
  console.log(`3 x ${i} = ${3 * i}`); // it will print the same but with less efforts
}

// while loop it executes till the condition is false just syntax is different

let i = 1; // intialise
while (i <= 10) {
  //condition
  console.log(i);
  i++; //increment and decrement
}

// do while loop it executes till the condition is false just syntax is different
// but there is an exception even if the condition is false it will execute once to check it see below

let j = 10;

do {
  console.log("CONDITION IS FALSE STILL EXECUTES ONCE");
  j++;
} while (j < 10);

//FUNCTIONS
//piece of code which has its own functionality use function keyword to declare a function

function myFunction() {
  // to create the function this is called function without paramater
  console.log("FUNCTION NAMED FUN");
}

myFunction(); // to call the function

function myNew(a) {
  // to create the function this is called function with paramater
  console.log(a); // the passed value will be printed here it will print 55
}

myNew(55); // to call the function  //55

function add(a, b) {
  console.log(a + b);
}
add(11, 22); // 33

//function with return type
// when you return you have to store it into variable

function withReturn(a, b) {
  return a + b;
}
let returnValue = withReturn(20, 30); // it has return type the so the value is stored here
console.log(returnValue); // 50   // we are printing stored value

// local and global scope

let abc = 55; // can be accessed outside and inside the block too global scope
function local() {
  let bb = 3; // inside block so scope is local we can not access it outside
  console.log(bb); //3
  console.log(abc); //55 it is global so it can be accessed
}
//console.log(bb); error cant be accessed outside the block
local(); //3

//anonymous function

// to make anonymous remove name and store function inside variable

let anonymous = function () {
  return "anonymous function";
};
//console.log(anonymous()); // anonymous function

let result11 = anonymous();
console.log(result11); // anonymous function or you can call like this

// self invoking anonymous function

(function () {
  console.log("hello");
})(); // it will call itself it is also known as closure

//Arrow function

let normal = function (a, b) {
  return a + b;
};
console.log(normal(122, 222)); // 344

//to convert above function into arrow function remove function keyword and after (a,b) => write this sign see below

let arrowFunction = (a, b) => {
  return a + b;
};
let arrow = arrowFunction(55, 1);
console.log(arrow); //56

let newArrow = (b, c) => {
  console.log(b);
  console.log(c);
};

newArrow(1, 2); // 1 and 2

//ARRAYS

//in js we can store differnet datatype elements in the array for example see below

let names = ["Harish", "Jay", "Rahul"];
console.log(names); // [ 'Harish', 'Jay', 'Rahul' ]

// index of the array starts from zero to print single we can use index

console.log(names[0]); // Harish
console.log(names[1]); // Jay
console.log(names[2]); // Rahul

// to find the length of the array

console.log(names.length); //3 because there are three elements present

// also we can store any datatype value in the array

let hetero = [1, "Hari", true, undefined];
console.log(hetero); //[ 1, 'Hari', true, undefined ]

// also to input value in the end of the array use push method

let raka = hetero.push("Raja", "Rahul"); // it returns the new length of the array //6

console.log("RAKA = " + raka); //6

console.log(hetero); // [ 1, 'Hari', true, undefined, 'Raja',, 'Rahul' ]

// also to input value first in the array use unshift

hetero.unshift("First");

console.log(hetero); //[ 'First', 1, 'Hari', true, undefined, 'Raja', 'Rahul' ]

// to add between the elements use splice method it takes first value that is index and second value that is how many items from that index

hetero.splice(1, 1);

console.log(hetero); // as you can see it removed one element from first index that is 1 //[ 'First', 'Hari', true, undefined, 'Raja', 'Rahul' ]

// also if you want diff element in that place of 1

hetero.splice(1, 1, "New Element");

console.log(hetero); //[ 'First', 'New Element', true, undefined, 'Raja', 'Rahul' ]

hetero.splice(1, 0, "0th element");

console.log(hetero); //['First', '0th element','New Element', true,undefined,'Raja', 'Rahul']

// it is inserted just before the element 1th index element

// Notice : Splice changes the original Array

// Also you can iterate array using loops so you can get elements one by one

for (let i = 0; i < hetero.length; i++) {
  console.log(hetero[i]); // all elements in array will be printed one by one
}

console.log(
  "******************************************************************************************************"
);
// Also there is a method to do the same

hetero.forEach((value) => {
  // you can pass three parameters here first will be considered as value, second is index and the last is whole array you can give any names to there parameters
  console.log(value); // all elements in array will be printed one by one
});

console.log(
  "******************************************************************************************************"
);

hetero.forEach((value, index, wholeArray) => {
  console.log("Element : " + value);
  console.log("Index : " + index);
  console.log("Whole Array : " + wholeArray);
  console.log(
    "*****************************************************************************************************"
  );
});

// lets do some experiment we will try to store it in a variable

let newArray = hetero.forEach((value) => {
  return value;
});

console.log(newArray); // it is returning undefined // because it does not return anything it is only for iteration

// But What if we want it in a new Array you can use map method

hetero.map((value) => {
  console.log(value); // whole elements in array will be printed one by one here
});

let newArrayMap = hetero.map((value) => {
  return value;
});
console.log("Map Method : " + newArrayMap); // in this way you can store it returns new Array //Map Method : First,0th element,New Element,true,,Raja,Rahul // also it returns new array it dosent change the original array

// to concatinate array use concat method

let concatArray1 = [88, 1, 2, 5];
let concatArray2 = [55, 88];

console.log(concatArray1.concat(concatArray2)); //[ 1, 2, 5, 55, 88 ]

// what if we store it in a variable

let newConcat = concatArray1.concat(concatArray2);
console.log(newConcat); // [ 1, 2, 5, 55, 88 ] // it will return new array

// to find index

console.log(newConcat.indexOf(88)); // 0th index // it by default returns first appearance index

// but what if 88 appears two times and I want last appearance

console.log(newConcat.lastIndexOf(88)); // 5

// To Sort the Array use sort method

console.log(newConcat.sort()); //[ 1, 2, 5, 55, 88, 88 ]

// can we store it in a variable

let sorted = newConcat.sort();
console.log(sorted); //[ 1, 2, 5, 55, 88, 88 ] // also it changes the og array too

console.log("OG Array : " + newConcat); //OG Array : 1,2,5,55,88,88

// below some methods which change the og state of the array

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.
// shift(): Removes the first element from an array.
// unshift(): Adds one or more elements to the beginning of an array.
// splice(): Adds or removes elements from an array at a specified index.
// sort(): Sorts the elements of an array in place.
// reverse(): Reverses the order of the elements in an array.

let spliced = newConcat.splice(1, 4); //[ 2, 5, 55, 88 ]
console.log(spliced); //[ 2, 5, 55, 88 ] return removed elements array

// In JavaScript, several array methods can modify the original array directly. These methods, known as mutator methods, include push(), pop(), shift(), unshift(), splice(), sort(), and reverse().

// push() adds one or more elements to the end of an array and returns the new length of the array. Returns: New length of the array.
// pop() removes the last element from an array and returns the removed element. Returns: Removed element.
// shift() removes the first element from an array and returns the removed element. Returns: Removed element.
// unshift() adds one or more elements to the beginning of an array and returns the new length of the array. Returns: New length of the array.
// splice() adds or removes elements from an array at a specified index and returns an array containing the removed elements. Returns: Array containing removed elements.
// sort() sorts the elements of an array in place and returns the sorted array. Returns: Sorted array.
// reverse() reverses the order of the elements in an array and returns the reversed array. Returns: Reversed array.

// These methods are called mutator methods because they directly modify the original array rather than creating a new one.

console.log("OG Array : " + newConcat); //OG Array : 1,88

// what if  i dont want my og array to be changed use slice method it will not touch og array
// It also takes 2 parameter first from which index and last index while to goes to the last index - 1 element

let sliceArray = [1, 2, 3, 4, 5, 1, 2];
let sliced = sliceArray.slice(1, 3);
console.log(sliced); //[ 2, 3 ]

console.log("OG SLICE ARRAY : " + sliceArray); //OG SLICE ARRAY : 1,2,3,4,5,1,2

// to convert array to string use toString method
console.log(
  "*****************************************************************************************************"
);
let arratToString = sliceArray.toString();
console.log(arratToString); //1,2,3,4,5

// filter method suppose you want selected elements from the array based on condition such as even, odd etc use filter method
// also if you want to perform some operation on all the elements use map method
console.log(
  "*****************************************************************************************************"
);
let filtered = sliceArray.filter((value, index, array) => {
  if (value >= 1 && value <= 4) {
    return value;
  }
});

console.log(filtered); //[ 1, 2, 3, 4 ] // also it stores it in a new array thats why it is used
console.log(
  "*****************************************************************************************************"
);
console.log(sliceArray);

// use find method to find the elements in the array
console.log(
  "*****************************************************************************************************"
);
let finded = sliceArray.find((value) => {
  return value == 5;
});
console.log(finded); //5 // if not found returns undefined // also it returns new array with elements found

console.log(
  "*****************************************************************************************************"
);
// to find index of the elements use findindex  function

let indexed = sliceArray.findIndex((value) => {
  return value == 2;
});

console.log(indexed); //1 // if not found returns -1 // also it returns new array with elements found

// what if element occurs multiple times use this findLastIndex
console.log(
  "*****************************************************************************************************"
);
let lastIndexed = sliceArray.findLastIndex((value) => {
  return value == 2;
});

console.log(lastIndexed); // 6 // if not found returns -1 // also it returns new array with elements found

// use split function to split the string in parts
console.log(
  "*****************************************************************************************************"
);
let numbers = "1,2,3,5,4,8,6,3";

//numberArray.split(",");

// numberArray.forEach((value)=>{
//    console.log(value); //error coz split method work on string not on the arrays so to resolve this store it in a variable
// })

let splitedNums = numbers.split(",");

splitedNums.forEach((value) => {
  // srtring to splited array
  console.log(value); //all elements one by one will be printed
});
console.log(splitedNums); //['1', '2', '3','5', '4', '8','6', '3'] string is converted into splited array

// also reverse the split condition bye using join method

let joinedNums = splitedNums.join(" and "); // splited array to joined string
console.log(joinedNums); // 1 and 2 and 3 and 5 and 4 and 8 and 6 and 3

//For in and For off Loop

let forNums = [1, 5, 6, 5, 8, 88];

for (let elements in forNums) {
  console.log(elements); // print indexes one by one based on the elements
  console.log(forNums[elements]); // to print values in the array
}
console.log(
  "*****************************************************************************************************"
);

for (let element of forNums) {
  console.log(element); // it will directly print values
}

// Multidimensional Array

let multi = [
  [1, 2, 3],
  [56, 55, 5],
];
console.log(multi); // print whole array where each array has index that is //[ [ 1, 2, 3 ], [ 56, 55, 5 ] ]
//index of [ 1, 2, 3 ] is 0
// index of  [ 56, 55, 5 ] is 1

// to print seperately use index
console.log(multi[0]); //[ 1, 2, 3 ]

// to print specific value use index present inside the indexes
//suppose you want to print 3 only from that array

console.log(multi[0][2]); //3

// to print array inside multi array one by one

for (let index = 0; index < multi.length; index++) {
  console.log(multi[index]); //it will print whole array one by one
}

// to print each and every element one by one

for (let i = 0; i < multi.length; i++) {
  for (let j = 0; j < multi[i].length; j++) {
    // use  j<multi[i].length to get the inside length
    console.log(multi[i][j]); // all elements one by one will be printed
  }
}

console.log(
  "*****************************************************************************************************"
);
// but this is lengthy process to shorten it use foreach loop

multi.forEach((value) => {
  value.forEach((innerValue) => {
    console.log(innerValue);
  });
});

console.log(
  "*****************************************************************************************************"
);

// for short ways to print multi dimesional arrays use for of

for (let value of multi) {
  for (let innerValue of value) {
    console.log(innerValue);
  }
}

//copy and spread operator

let arr1 = ["John", 202, true];
//let arr2 = arr1;
//console.log(arr2); //["John", 202, true];

//but if we push in arr1 it will be refleced in the arr2

//arr1.push("Cena");
//console.log(arr2); //[ 'John', 202, true, 'Cena' ]

// to resolve this issue there are two ways

//1st is that push in the arr2 only but that is not a good practice

//2nd is using slice

console.log(
  "*****************************************************************************************************"
);

let arr2 = arr1.slice(0).concat(2); // this is a good practice // you can also add while slicing too by using concat method

console.log(arr2); // [ 'John', 202, true ]

// now push in arr1  check the values

arr1.push("55");

console.log(arr2); // [ 'John', 202, true]
console.log(
  "*****************************************************************************************************"
);
console.log(arr1); //[ 'John', 202, true, '55' ] // see changes are not reflected in arr2 in this way we can copy the array

// More Ways By using Spread Operator ...

let ar1 = [5455, 545, 54];
let ar2 = [...ar1];
ar1.push("Hiii");
console.log(ar1); //[ 5455, 545, 54, 'Hiii' ]
console.log(ar2); // [ 5455, 545, 54 ] changes are not reflected as you can see this is a good way too

// Array Desctructuring

let array = ["Harish", "Jay"];

//I want harish in one variable and jay is second variable so we can do like this

//let newArr1 = array[0];
//let newArr2 = array[1]; // this is correct but not recommended what if there are too many elements in the array

//console.log(newArr1); //Harish
//console.log(newArr2);//Jay

// easy way

let [newArr1, newArr2] = array;
console.log(newArr1); // Harish
console.log(newArr2); // Jay // In this way you can do this

let newDes = [1, 2, 3, 4, 6]; // what if there are other elements present and I want remaining elements stored in one variable

// for that use spread operator

let [item1, item2, ...item3] = newDes;
console.log(item1); //1
console.log(item2); //2
console.log(item3); //[ 3, 4, 6 ] remaining elements stored here in this you can make var for all elements or use spread operator to store remaining elements in the variable

// OBJECTS IN JS

// they are in the key value pair and are stored in the curly braces

let myObject = {
  myName: "Bravo",
  myCity: "DAN",
};

console.log(myObject); //{ myName: 'Bravo', myCity: 'DAN' }

// to print specific value

console.log(myObject.myCity); //DAN
console.log(myObject.myName); //Bravo

//OR

console.log(myObject["myCity"]); //DAN
console.log(myObject["myName"]); //Bravo

// it is a good practice to give cots to the keys too

// because what if there is a space in the key

let newOb = {
  "last city": "Delhi", // it is already giving here while not in cots
  // but after giving the cots the error is gone
};

// to print it

console.log(newOb["last city"]); //Delhi

//console.log(newOb.last city); you cant do like this space not allowed while printing

// thats why it is a good practice to give keys on cots too

// Function inside object

// yes you can write function inside the object too and store array too

let newFunc = {
  myFuncObj: (a, b) => {
    return a + b;
  },
  myarr: [1, 2, 3, 4, 5],
};

// to call the function

let newVar = newFunc.myFuncObj(1, 1);
console.log(newVar); // 2

// to print array

let newFuncArray = newFunc.myarr;
console.log(newFuncArray); // [ 1, 2, 3, 4, 5 ]

// to add externally in the object do this

newFunc.key = "item";

console.log(newFunc); //  {myFuncObj: [Function: myFuncObj],myarr: [ 1, 2, 3, 4, 5 ],  key: 'item'}

// in this way you can add also there is another way

let newObjElement = "key2";

newFunc[newObjElement] = "item2";

console.log(newFunc); //{ myFuncObj: [Function: myFuncObj], myarr: [ 1, 2, 3, 4, 5 ],key: 'item',key2: 'item2'}

//or

newFunc["key3"] = "item3";

console.log(newFunc); // this will be added successfully

// to print the keys from object use for in loop

for (let i in newFunc) {
  console.log(i); // all keys will be printed one by one
  console.log(newFunc[i]); // to print all the values
}

console.log(
  "*****************************************************************************************************"
);

// another way use Object.keys

for (let i of Object.keys(newFunc)) {
  console.log(i); // all keys will be printed
  console.log(newFunc[i]); // to print all values in this way you can print too
}

//Object inside array

let arrr = [
  { id: 1, firstName: "Harish" },
  { id: 2, firstName: "Rahul" },
  { id: 3, firstName: "Jay" },
];

console.log(arrr); //[  { id: 1, name: 'Harish' }, { id: 2, name: 'Rahul' }, { id: 3, name: 'Jay' }]

// to print the first object

console.log(arrr[0]); //{ id: 1, name: 'Harish' }

//using loops

for (let i in arrr) {
  console.log(i); // indexes will be printed
  console.log(arrr[i]); // object will be printed one by one
}

// to destructure it

let [obj1, obj2] = arrr;

console.log(obj1); //{ id: 1, name: 'Harish' }

//what if we only want names pass it in the curly braces while destructuring

let [{ firstName }, obj3] = arrr;

console.log(firstName); //Harish /. call it by property name like this but there is an issue i have same property in my all the objects so how to call second object name property

// you have to change the name see below because we cant declare same name fields

let [{ firstName: name1 }, { firstName: name2 }] = arrr;
console.log(name1); //Harish
console.log(name2); // Rahul

//let [items1, items2, items3] = arrr; // all objects will be stored to the corresponding variables

// what if we want to store only first and third object leave space there see below

let [items1, , items3] = arrr;
console.log(items1); // { id: 1, firstName: 'Harish' }
console.log(items3); //  { id: 3, firstName: 'Jay' }

// function inside function

function function1() {
  console.log("function 1");

  function function2() {
    console.log("function 2");
  }
  function2();
}
function1(); // function 1 , function 2

//function2(); error because it is inside we cant call it outside to resolve call it inside the function

// Lexical Scope

function fun1() {
  console.log("fun1 called");
  let amt = 2;
  console.log(amt); //2

  function fun2() {
    //let amt = 3; // after declaring here it will print 3 below
    console.log(amt); //2
  }
  fun2();
}

fun1();

// 2 and 2 is printing normally because amt is in the lexical scope of fun2, but what if we declare inside func2 it will give error function will search first in its own block if not found it will find it its lexical environment

// what if we declare amt again inside function

// what if we declare amt above all function it will take amt value from there if not found in its own scope

// it will always found outside function

//DEBUGGER it is used to debug the code

function debug() {
  //debugger; // use this keyword to enable debugging look for all the steps where the code ie executing and check for the errors

  for (let index = 1; index < 6; index++) {
    console.log(index);
  }
}
debug(); // check this on the browser console we can see how the values are changing thats all

//Set

//set is just like array difference is that it cant store duplicate values

// to make set

const mySet = new Set([10, 20, 30, 40, 30]); // you can add value from here or using add method of sets, as you can see 30 is not stored again
mySet.add(55);
console.log(mySet); //Set(5) { 10, 20, 30, 40, 55 }

// we cant use length method on the so how to find its length  =  use a loop

let setLength = 0;
for (let element of mySet) {
  setLength++;
}
console.log(setLength); // 5  as you can see length is printed

// Map

// map store value in the key and value format key must be unique value can be duplicate

let myMap = new Map([
  [1, "One"],
  ["name", "Harish"],
]); // you can add like this

// also there is a method set

myMap.set("whole numbers", [1, 2, 3]);

console.log(myMap); //  Map(3) { 1 => 'One', 'name' => 'Harish','whole numbers' => [ 1, 2, 3 }

// to find keys there is a method

console.log(myMap.keys()); //[Map Iterator] { 1, 'name', 'whole numbers' }

// or

let myKeys = myMap.keys();
console.log(myKeys); //[Map Iterator] { 1, 'name', 'whole numbers' }

// also you can iterate on this myKeys to get keys one by one

for (let keys of myKeys) {
  console.log(keys); //1 name whole numbers
}

// THIS keyword it refers to the current object this.varname it will refer to the current object instance var

let thisObj = {
  id: 1,
  fName: "Harish",
  function: function () {
    console.log(this.fName);
  }, // write this.fname here
};
// now call the function

thisObj.function(); // name is not defined to solve this, after that // Harish will be printed

// lets do some experiment

function thisCheck() {
  // console.log(this); // refer to the current instance which is windows check in console there will be function named  thisCheck()
  console.log("Window thisCheck Function");
}
//thisCheck(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …} it is referring to the parent object

// so parent windows it is referring to the windows object so can we call it by windows.thisCheck()
// to check comment this printed in above function

//window.thisCheck(); // on console  Window thisCheck Function will be printed on terminal it is giving error so comment it

// New Keyword

// there is flaw when we log this it refers to the windwow object

function checkFun() {
  let Lname = "Harish";
  this.Lname = Lname; // do this, this refers to the current object, new object is checkFun so name will be set there
}
console.log(checkFun()); // undefined coz windows object dosent have this LName

// to solve this

console.log(new checkFun()); // it will make empty object of the checkFun()  //checkFun { Lname: 'Harish' } // for this do this.Lname = Lname so it will set Lname in the current object

// or

let obj = new checkFun();
console.log(obj); //checkFun { Lname: 'Harish' }
console.log(obj.Lname); //Harish

// Constructor

// technically they are regular functions but there are 2 conventions

//They are named with the capital letters

//They should be executed with the new keyword

function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

console.log(new User("Harish")); // User { name: 'Harish' }

// also you can pass like this

let person = new User("personUser");
console.log(person); //User { name: 'personUser' }
console.log(person.name); // personUser

// if the new keyword is not used there will be error that the properties are not set to tackle this check above if block

let person1 = User("withoutNew");
console.log(person1.name); //withoutNew

// SYMBOL

// symbol represents a unique identifier

// to make symbol see below

let sym = Symbol("id");
console.log(sym); //Symbol(id)

// also to print in the proper format use to string method on it

console.log(sym.toString()); //Symbol(id) same but in string

console.log(sym.description); //id // returnal internal slot of symbol directly

// But why it is unique

let sym1 = Symbol("id");

// we declared with the same internal slot now check using === operator

console.log(sym === sym1); // false

//Using symbl in the object

let id = Symbol("symbolId");

let myObj1 = {
  [Symbol("c")]: "private symbol",
  mName: "Harish",
  [id]: 1, // write this format to make id symbol in object
};

console.log(myObj1); // { mName: 'Harish', [Symbol(id)]: 1 }

// to print symbol you cant print normally it will give error to print it use square braces

console.log(myObj1[id]); // 1

console.log(myObj1[Symbol("c")]); // undefined // to print it you have store it in a variable too just like id above

// it is used to define the property uniquely that you are not going to use again and again

// to use symbol store it in a variable and then use to string method on it so we can use it properly

// you can set symbol from external too

myObj1[id] = 2;

console.log(myObj1[id]); // 2

for (let key in myObj1) {
  console.log(key); //mName only this will be printed not the symbol
}
//it doesn't appear in typical for...in loops because it's meant to be private. This helps prevent accidental access or modification from outside code.

//Recursion

// a function calling itself is known as recursion

// we can achieve same result by using loops too but based on the scenarios you have to use the recursion

// somewhere recursion will make better sense, somewhere loops will

function printNumber(n) {
  if (n <= 10) {
    console.log(n);
    printNumber(n + 1);
  }
  // this will print from 1 to 10
}
printNumber(1);

// another example of finding factorial usinng recursion

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let fact = factorial(5);

console.log(fact); // 120

// it is performing internally like 5 * factorial(5-1) * factorial(4-1) * factorial(3-1) * factorial(2-1) * factorial(1-1) here it will return coz condition is 0 in if is satisfied

// Asynchronous Javascript

// Js is synchronous for example it executes line by line it dosent care what the code is if the code is correct it will execute from top to bottom

//console.log(1);
//console.log(3);
//console.log(2); // check the order it is 1 then 3 and the 2

// but i want to print 2 before 3 so we will use setTimeOut it will take function as a parameter and time in millis
// write log 3 in the function it will print after 5  secs check below

setTimeout(() => {
  //  console.log(3);
}, 1000); // 3000 in millis or 3 secs check the console it is taking 3 secs to print

// to simplify it

setTimeout(functionSet, 0); // before we gave 2 sec here we inputed 0 to check what happens
console.log("This is ");
function functionSet() {
  // console.log("Js");
}
console.log("Async"); // as you can see Js is printing after 2 secs

// but what if we gave the time interval of 0 give 0 above // still it will be printed after this is and async

// CALLBACK

// in the callback we take another function as a argument

function funNumbers(value) {
  console.log(value);
}

function addNumbers(a, b, callBackCall) {
  let sum = a + b;
  callBackCall(sum); // we setted sum in the callBackCall Function which is internally calling the funNumbers function
}

addNumbers(10, 10, funNumbers); // as you can see 20 is printed here so here we pass function as an argument

// callback hell

// lets make 4 function to demonstrate callback hell

// function loadingData(){
//   console.log("1.Loading data");
// }
// function collectingData(){
//   console.log("2.Collecting data");
// }
// function approvingData(){
//   console.log("3.Approving data");
// }
// function approved(){
//   console.log("4.Approved");
// }

//loadingData(); //1.Loading data
//collectingData();//2.Collecting data
//approvingData();//3.Approving data
//approved();//4.Approved

// as you can see it is printing one by one but what if loading data is taking some time to finish the work

// for that use set time out in the loading data function

// function loadingData(){
//   setTimeout(()=>{
//     console.log("1.Loading data");
//   },3000);

//    } // as you can see loading data function is calling lastly

// to tackle this there are 2 ways use set time out and give same time for all the functions
// but what if we have 1000s of function you have to write it in all the correspoding function

// so there is a better way we will use callback

// to call loading data we have to pass there remaining function also take paremeter in the corresponding function

// function loadingData(callback){
//   setTimeout(()=>{
//     console.log("1.Loading data");
//     callback(); // here it will be called
//   },3000);

//    }
//    function collectingData(){
//     console.log("2.Collecting data");
//   }
//   function approvingData(){
//     console.log("3.Approving data");
//   }
//   function approved(){
//     console.log("4.Approved");
//   }

//   loadingData(
//   function passed(){
//   collectingData();
//   approvingData();
//   approved();
// });

// now as you can see it is printing properly what if the other function are taking some time for printing too

// use this method in all the function so regardless of time it will be printed correctly

// function loadingData(callback){
//   setTimeout(()=>{
//     console.log("1.Loading data");
//     callback(); // here it will be called
//   },2000);

//    }
//    function collectingData(callback){
//     setTimeout(()=>{
//       console.log("2.Collecting data");
//       callback(); // calling callback here
//     },3000);  // after giving time here the output in not correct to fix this use callback

//   }
//   function approvingData(callback){
//      setTimeout(()=>{
//       console.log("3.Approving data");
//       callback();
//      },4000);
//   }
//   function approved(){
//     console.log("4.Approved");
//   }

//   loadingData(
//   function (){
//   collectingData(
//     function (){
//         approvingData(function()
//       {
//         approved();
//       });
//   } );

// });

// now it is printing properly do the same for all the functions

// in this way you have to set callback so regardless of time it will print properly

// this behaviour is called callback hell but same problem what if there are thousand of functions

// to resolve it user promises

//PROMISE

// there are basically three states in promise resolve, reject and pending

// promise take function followed by new keyword

function promise1(task) {
  return new Promise((resolve, reject) => {
    // it takes a function with two parameters one for success and 2nd for failure
    if (task) {
      resolve("Task Done");
    } else {
      reject("Task Failed");
    }
  });
}

// to call it

// let onResolve  = (resolve) => {
//   console.log(resolve);
// };

// let onReject  = (e) => {
//   console.log(e);
// };

//promise1(true) // you cant call like this normally

promise1(false)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  }); // you can see the task in done is printed here you can pass direct function like this or you can make function outside andd pass it here like this

// Now Implement it in the another function

function loadingData() {
  // no need of callback here so remove parameter

  // create promise here

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1.Loading data");
      resolve(); // change this callback to resolve();
    }, 2000);
  });
}
function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2.Collecting data");
      resolve();
    }, 3000);
  });
}
function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3.Approving data");
      reject("ASYNC REJECTED");
    }, 4000);
  });
}
function approved() {
  console.log("4.Approved");
}

//   loadingData(
//   function (){
//   collectingData(
//     function (){
//         approvingData(function()
//       {
//         approved();
//       });
//   } );

// });

// we applied promise here so to call it

//loadingData().then(collectingData).then(approvingData).then(approved) // all function will be printed properly

// but suppose there is an error to do it call reject function in the 3rd function it will give code err_unhandled_rejection

//also to catch the error we have to use catch

// loadingData().then(collectingData).then(approvingData).then(approved).catch((reject)=>{
//   console.log(reject);
// });

// as you can see it is printing catch block remove reject and call resolve there to get correct output

// Async and Await

// It is a better way to do things like promises

// async function example()
// {
//   await loadingData();
//   await collectingData();
//   await approvingData();
//   approved();
// }

// when you use await inside the function you have to make the function async, now call it

//example(). // It is printing one by one properly // also the async will return the promise

// we can say that whole function is a promise thats why we can use catch here

// example().catch((err)=>{
//   console.log(err);   // change resolve to reject in above function to see this output
// })

// as you can see it is printing rejection properly

//Set Interval and Clear Interval

// it repeats the output or code after given interval of time it also takes function and time

// let numInterval  = 0;

// let inter  = setInterval(funInterval,2000);
// function funInterval()
// {
//   numInterval = numInterval + 1;
//   console.log(numInterval); // as you can see it is printing value after 2-2 seconds
// }

// see this example

// function infun()
// {
//   let date = new Date().toLocaleString();
//   console.log(date);
// }
// let inter  = setInterval(infun,1000); // as you can see it is printing time again and again

// // suppose we want to clear the interval after 5 secs

// setTimeout(() => {
//   clearInterval(inter);
// }, 5000); // so after five seconds it will be stopped

// Call, Bind and Apply

let newObj1 = {
  oname: "John",
  fun: function () {
    console.log(this.oname); // calling name in the own object
  },
};
newObj1.fun(); // as you can see john will be printed

// what if there is another object with the same property

let newObj2 = {
  oname: "Cena",
};

// to do this use call

newObj1.fun.call(newObj2); // Cena will be printed here

// now why this is referring to the object 2 lets simplify it

function fu1() {
  console.log(this.myName);
}

let newObj3 = {
  myName: "Harish",
};

let newObj4 = {
  myName: "Harry",
};

fu1.call(newObj3); // Harish
fu1.call(newObj4); // Harry  in this way it works

// we can pass parameters too in the functions

function fu2(age, gender) {
  console.log(this.myName, age, gender);
}

fu2.call(newObj3, 18, "Male"); //Harish 18 Male

fu2.call(newObj4, 18, "Male"); //Harry 18 Male

// Apply

//fu2.apply(newObj3,12,"Male"); // error //CreateListFromArrayLike called on non-object

// so it has the same functionality you just have to pass it as an array

fu2.apply(newObj3, [12, "Male"]); //Harish 12 Male

//Bind it returns the binded function with all the values present

let binded = fu2.bind(newObj3, [12, "Male"]); // check its type

console.log(typeof binded); // function

console.log(binded); //[Function: bound fu2] // on console //ƒ fu2(age, gender){console.log(this.myName, age, gender)}

// it will return the function with values in binded format

// Property , flag and descriptors

let emp = {};

emp.name = "John";

console.log(emp); //{ name: 'John' }

console.log(Object.getOwnPropertyDescriptor(emp, "name")); // this take an object and its key
//{ value: 'John', writable: true, enumerable: true, configurable: true }

// we cann input our own property too for that

Object.defineProperty(emp, "age", {
  value: 21,
  writable: false,
  configurable: false,
  enumerable: true,
});

console.log(emp); //{ name: 'John', age: 21 }

console.log(Object.getOwnPropertyDescriptor(emp, "age")); //{ value: 21, writable: true, enumerable: true, configurable: true } // after changing  { value: 21, writable: false, enumerable: false, configurable: false }

// now we are going to change some of the properties
// make writable false then you cant change the value of the age later //
emp.age = 22;
console.log(emp); // still { name: 'John', age: 21 }
// make configurable false
delete emp.age;
console.log(emp); //{ name: 'John', age: 21 }
// make enumerable false then it will change into non iterable so you cant use loops

// PROTO

// proto and prototype are two different concepts

// to define proto

let protoObj1 = {
  lname: "Gates",
};

let protoObj2 = {
  pname: "Bill",
};

// protoObj2.__proto__ =  protoObj1;

// console.log(protoObj2.lname); // Gates

// as you can see the lname is in the first object but we are accessing it by using second object

// we have made proto of object 1 in the object 2 so the object 2 will search in its own scope before if not found it will search in the proto object

//console.log(protoObj2); // on console // Object pname: "Bill"[[Prototype]]: Objectlname: "Gates"[[Prototype]]: Object

// it will create of reference of object 1 in the object 2

//console.log(protoObj1.pname); // undefined // because object 1 does not have the object 2 reference

// there are many ways to define proto too see below

protoObj2 = Object.create(protoObj1);

console.log(protoObj2); // {} empty with prototype object object 1 //it creates a new object with the specified prototype object // it dosent inherit the properties we made before after using this method // but it still has the proto object of proto 1

console.log(protoObj2.lname); //Gates

// NOTE :  the object we are seeing while printing above is proto not prototype both the things are differet

// proto

// suppose i want name and age as a new object by just creating a proto

// function Person(name, age) {
//   let person = Object.create(protoObj3);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// let protoObj3 = {
//   greet() {
//     console.log(`Hello ${this.name} and your age is ${this.age}`);
//   },
// };

// let user =  Person("John", 18);
// console.log(user); //  {name: 'John', age: 18}age: 18name: "John"[[Prototype]]: Objectgreet: ƒ greet()[[Prototype]]: Object

// user.greet(); //Hello John and you age is 18

// you can can see there is greet function in the person proto

// you can do the same code but in the better way using prototype

// PROTOTYPE

// every function has black object in which we can input key and value to check it

// function Person(name, age) {
//     let person = Object.create(Person.prototype); // change person.prototype here
//     person.name = name;
//     person.age = age;
//     return person;
//   }

//     Person.prototype.greet = function()
//     {
//       console.log(`Hello ${this.name} and your age is ${this.age}`);
//     }

//   let user =  Person("John", 18);
//   console.log(user); // Person {name: 'John', age: 18}

// user.greet(); //Hello John and your age is 18

//   console.log(Person.prototype);//{greet: ƒ} // {}check console for better // it hs constructor arguments and all other properties

// what if we add greet function directly in the prototype  for that use person.prototype.greet

// see it is printing same but it is a better way

// we can do this better too by using new keyword while creating object for user so we dont have to write return starement too

//   function Person(name, age) {
//     // no need of this after new keyword it will auto create black object of the person
//     //let person = Object.create(Person.prototype); // change person.prototype here
//     this.name = name;
//     this.age = age; // change here as this
//     // no need return person;
//   }

//     Person.prototype.greet = function()
//     {
//       console.log(`Hello ${this.name} and your age is ${this.age}`);
//     }

//   let user = new Person("John", 18); // new here
//   console.log(user); // Person {name: 'John', age: 18}

// user.greet(); //Hello John and your age is 18

// console.log(Person.prototype); //{greet: ƒ}

// as you can see it is printing the same out just the code simplified

// CLASS

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hii ${this.name} and your age is ${this.age}`);
  }
}

let user = new Person("jack", 78);
console.log(user); //Person { name: 'jack', age: 78 }
user.greet(); //Hii jack and your age is 78

// as you can see same output but the code is simplified too much

class MyClass {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hii ${this.name}`);
  }
}
let user1 = new MyClass("Harish");
console.log(user1); //MyClass { name: 'Harish' }

// you can make as many objects as you can

let user2 = new MyClass("Jack");
console.log(user2); // MyClass { name: 'Jack' }

// but there is a twist

console.log(typeof MyClass); //function this is working as function in the backend

// we studied prototype before we want to check if it is in the prototype or not for that

console.log(MyClass.prototype.sayHi); // [Function: sayHi] // on console ƒ sayHi(){ console.log(`Hii ${this.name}`);}

// as you can see this is the prototype and the code is simplified too much

// Inheritance

// class Animal{
// constructor(name)
// {
// this.name = name;
// }
// speak()
// {
//   console.log(`${this.name} is making some sound`);
// }
// }

// class Dog{
//   constructor(name)
//   {
//   this.name = name;
//   }
//   speak()
//   {
//     console.log(`${this.name} is making some sound`);
//   }
// }

// let buzo = new Animal("Rufus");
// buzo.speak(); // Rufus is making some sound

// let d = new Dog("Dog");
// d.speak(); //Dog is making some sound

// Relate this to the real world all animals make some sound so for the all the animals we have to write the same property to call it but there is another way by using inheritance you can solbe this you just have to make animal parent class and extend it into child so all the child classes can use the property there

// class Animal{
//   constructor(name)
//   {
//   this.name = name;
//   }
//   speak()
//   {
//     console.log(`${this.name} is making some sound`);
//   }
//   }

//   class Dog extends Animal{
//     constructor(name)
//     {
//       super(name);// you just have to use super here so it will call the parent class constructor
//     }
//   }

//   let d = new Dog("Dog");

//   d.speak();// Dog is making some sound

// STACTIC KEYWORD

//In JavaScript, the static keyword is used in classes to define methods or properties that belong to the class itself rather than to instances of the class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is making some sound`);
  }
  static sing(name) {
    console.log(`${name} is singing`); // we made static method here
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // you just have to use super here so it will call the parent class constructor
  }
}

let d = new Dog("Dog");

d.speak(); // Dog is making some sound

// calling static method here

//d.sing(); error d.sing is not a function to call it

//Animal.sing(); // Animal is singing But I want do to be printed there not Animal

// to do this remove this.name from class and take parameter there in sing method

Animal.sing(d.name); // Dog is singing

// take another example

class Game {
  static score = 0; // we took static variable here

  constructor() {
    this.isPlaying = false; // by default it will false
  }
  start() {
    this.isPlaying = true;
    console.log("Game Started");
  }

  end() {
    this.isPlaying = false;
    console.log("Game Ended");
    Game.updateScore();
  }

  static updateScore() {
    Game.score++;
    console.log(`Score : ${Game.score}`);
  }
}

const game = new Game();
game.start(); //Game Started
game.end(); //Game Ended Score : 1
game.end(); //Game Ended Score : 2

// as you can see static members can be accessed throughout the program and also its memory is not destroyed
// throughout the program

// Public and Private

// class BankAccount{
//   balance = 0;
//   deposit(amount){
//      this.balance += amount;
//      console.log(`Deposited : ${amount} Balance : ${this.balance}`);
//   }
//   withdraw(amount)
//   {
//    if(amount>this.balance)
//    {
//     console.log("INSUFFICIENT BALANCE");
//    }
//    else{
//     this.balance -= amount;
//     console.log(`Withdraw : ${amount} Balance : ${this.balance}`);
//    }
//   }

// }
// const accounnt = new BankAccount();
// accounnt.deposit(1000); //Deposited : 1000 Balance : 1000
// accounnt.deposit(100000); //Deposited : 100000 Balance : 101000
// accounnt.withdraw(5000); //Withdraw : 5000 Balance : 96000

// Now will use private members to make members private use # symbol

class BankAccount {
  #balance = 0; // now you cant access this outside the class
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited : ${amount} Balance : ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("INSUFFICIENT BALANCE");
    } else {
      this.#balance -= amount;
      console.log(`Withdraw : ${amount} Balance : ${this.#balance}`);
    }
  }
  accessBalance() {
    console.log(this.#balance);
  }
}
const accounnt = new BankAccount();
accounnt.deposit(1000); //Deposited : 1000 Balance : 1000
//console.log(accounnt.balance); //undefined we cant directly access balance to access we have to make special method
accounnt.accessBalance(); // to access balance /// 1000
accounnt.withdraw(500); //Withdraw : 500 Balance : 500
accounnt.accessBalance(); //500

// this private keyword is used to make program secure so the no one can breach the program

class MyClassNew {
  #privateField;

  constructor() {
    this.#privateField = "I am private";
  }

  getPrivateField() {
    return this.#privateField;
  }

  publicMethod() {
    return "I am a public method";
  }
}

const myInstance = new MyClassNew();

console.log(myInstance.publicMethod()); // Output: I am a public method
//console.log(myInstance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
console.log(myInstance.getPrivateField()); // Output: I am private

// Try, Catch and Throw

// function tryExample(a,b)
// {
// return a/b;
// }
// console.log(tryExample(10,5)); // 2
// // but what if user passes 0
// console.log(tryExample(10,0)); //Infinity

//but we want proper message to be shown when this error occurs so that user can understand it

function tryTest(a, b) {
  try {
    if (b == 0) {
      throw new Error("Divisor Cant Be Zero");
    } else {
      return a / b;
    }
  } catch (err) {
    console.error(err); // now if the user passes divisor 0 error will be shown there
  }
}
//tryTest(1,0); //Error: Divisor Cant Be Zero

// Fetch API

// first we will fetch something from a txt file for that make a txt file in the same directory

// also this fetch return promise

// fetch('fi/e.txt') // to generate error give incorrect file name
//   .then((res) => {
//     if(!res.ok)
//     {
//          throw new Error('Not Responding');
//     }
//     return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch((err)=>{ // this block will execute when the error is there
//     console.log(err);
//   })

  // it will give error on the terminal but check the console the file is printing properly

// now we will fetch from online


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>{
// if(!response.ok)
// {
//   throw new Error('Not Responding');
// }
// return response.json(); // text to json here
// })
// .then(data =>data.forEach(element=>{
//       console.log(element.title); // it will print all data but we want title so use element.title here
//       // all titles will be printed successfully
// })
// )
// .catch((error)=>{
//   console.log(error);
// })

// output : [Function: json] // all data in text printed you can check on the console too

// but we are fetching data from json so use json instead of text();

// as you can see all the data is printed in the json format

// what if i want to print the titles only

// what if i want to send data to server

// get is for read 

// post is for data sending on server

//JSON.stringify this is used to convert js object into json usually used to send the data on server 


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  // after running this id is 101 it means it is sended successfully coz previously id was 100 only

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => response.json())
  // .then((json) => console.log(json));




fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
if(!response.ok)
{
  throw new Error('Not Responding');
}
return response.json(); // text to json here
})
.then(data =>{
    console.log(data);
}
)
.catch((error)=>{
  console.log(error);
})

// for updating use put and delete use delete method 