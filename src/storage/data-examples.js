
const stringyOne = 
`const array1 = [1, 2, 3, 4];
0 + 1 + 2 + 3 + 4
const initialValue = 0;

const sumWithInitial = array1.reduce(
\u00A0\u00A0(previousValue, currentValue) => previousValue + currentValue,
\u00A0initialValue
);

console.log(sumWithInitial);
// expected output: 10`

const stringyTwo = 
`var obj2 = {
  a: 5,
  b: function (param) {
      return param;
  }
};`
const data = [
  {
    nameComponent:'CodeExamples',
    id: 1,
    headerText : 'Sum of all the elements in an array',
    diffecaltLevel : 'Easy',
    codeExample : stringyOne,
    mainText : 'The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.',
  },
  {
    nameComponent:'CodeExamples',
    id: 2,
    headerText : 'Example Header text',
    diffecaltLevel : 'Middle',
    codeExample : stringyTwo,
    mainText : 'This is main description text',
  },
  {
    nameComponent:'CodeExamples',
    id: 3,
    headerText : 'Example Header text',
    diffecaltLevel : 'Hard',
    codeExample : 'code',
    mainText : 'This is main description text',
  }
]

export default data 

