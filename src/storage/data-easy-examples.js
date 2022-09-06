const easyExamples = [
  {
    nameComponent:'CodeExamples',
    id: 101,
    headerText : 'Sum of all the elements in an array',
    diffecaltLevel : 'Easy',
    codeExample : 
    `
    const array = [1, 2, 3, 4];
    
    const sum = array.reduce((collectorOfValues, value) => collectorOfValues + value, 0);
    
    console.log(sum);

    \xa0 start from 0, as it initional value, in the first - pushed to collectorOfValues
    \xa0\xa0 / 0 + 1 = 1
    \xa0\xa0  / 1 + 2 = 3
    \xa0\xa0  / 3 + 3 = 6
    \xa0\xa0  / 6 + 4 = 10 <= final itteration
    
    expected output: 10
    `,
    mainText : 'The reduce() walks through the array element-by-element at each step adding the current array value ( => value) to the result from the previous step ( => collectorOfValues) (this result is the running sum of all the previous steps) — until there are no more elements to add.',
  },
  {
    nameComponent:'CodeExamples',
    id: 102,
    headerText : 'Multiply of all the elements in an array',
    diffecaltLevel : 'Easy',
    codeExample : 
    `
    const array = [1, 2, 3, 4];
    
    const sum = array.reduce((collectorOfValues, value) => collectorOfValues * value, 1);
    
    console.log(sum);

    \xa0 start from 1, as it initional value, in the first - pushed to collectorOfValues
    \xa0\xa0 / 1 * 1 = 1
    \xa0\xa0  / 1 * 2 = 2
    \xa0\xa0  / 2 * 3 = 6
    \xa0\xa0  / 6 * 4 = 24 <= final itteration
    
    expected output: 24
    `,
    mainText : "Since we are multiplying, the initial value must be 1, in the case of multiplication by 0 the result will always be 0. As in previous, the reduce() walks through the array element-by-element at each step adding the current array value ( => value) to the result from the previous step ( => collectorOfValues) (this result is the running multiplication of all the previous steps) — until there are no more elements to add.",
  },
  {
    nameComponent:'CodeExamples',
    id: 102,
    headerText : 'Sum of values in an array of objects',
    diffecaltLevel : 'Easy',
    codeExample : 
    `
    const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const sum = objects.reduce(
    \xa0(collectorOfValues, value) => collectorOfValues + value.x,
    0,);
    
    console.log(sum); // logs 6

    \xa0 Since this is an array of objects, reduce() will treat each of them the same way as the numbers in the examples above. \n
    \xa0But we want access to specific property of a key, so we use name of the key of the object ( value.x ) to be placed in value.

    \xa0\xa0 / x.0 + x.1 = 1
    \xa0\xa0 / x.1 + x.2 = 3
    \xa0\xa0 / x.3 + x.3= 6 <= final itteration
   
    expected output: 6
    `,
    mainText : "To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.",
  },
]

export default easyExamples