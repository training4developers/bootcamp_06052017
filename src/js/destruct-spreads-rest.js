
const nums = [1,2,3,4,5];

const [ first, second, ...leftOver ] = nums;

console.log(first);
console.log(second);
console.log(leftOver);



// const f = ({ fn, ln }) => {

//     console.log(fn);
//     console.log(ln);
// };

// f({
//     fn: 'Bob',
//     ln: 'Smith',
// });

// const f = p => {

//     // destructuring
//     const { fn: firstName, ln: lastName } = p;

//     console.log(firstName);
//     console.log(lastName);
// };



// left vs right
// param = argument

// three dots applies to the left side are the rest operator
// const f = (...params) => {
//     console.log(params);
// };

// three dots applied to right side are the spread operator
//f(...[1,2,3,4]);

