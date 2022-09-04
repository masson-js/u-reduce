const easyExamples = [
  {
    nameComponent:'CodeExamples',
    id: 1,
    headerText : 'Sum of all the elements in an array',
    diffecaltLevel : 'Easy',
    codeExample : 
    `
    const array = [1, 2, 3, 4];
    
    const sum = array.reduce((acc, rec) => acc + rec, 0);
    
    console.log(sum);
    
    expected output: 10
    `,
    mainText : 'The reducer walks through the array element-by-element at each step adding the current array value ( => rec) to the result from the previous step ( => acc) (this result is the running sum of all the previous steps) — until there are no more elements to add.',
  },
]

export default easyExamples