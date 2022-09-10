const middleExamples = [
  {
    nameComponent:'CodeExamples',
    id: 201,
    headerText : 'Sort values by ages, in object with array of objects',
    diffecaltLevel : 'Middle',
    codeExample : 
    `
    const people = [

      \xa0{name: 'Kyle', age:26},
      \xa0{name: 'Jhon', age: 31},
      \xa0{name: 'Sally', age: 42},
      \xa0{name: 'Jill', age: 42},

      ]
      const result = people.reduce((groupedPeople, person) => {

        \xa0const age = person.age

        \xa0 if (groupedPeople[age] == null) groupedPeople[age] = []

        \xa0\xa0groupedPeople[age].push(person)

        \xa0\xa0return groupedPeople

        \xa0}, {}

      )
      console.log(result)

      expected output:
      {
      \xa026: [{name: 'Kyle', age:26}],
      \xa032: [{name: 'Jhon', age: 31}],
      \xa042: [{name: 'Sally', age: 42}],
      \xa0\xa0\xa0\xa0\xa0[{name: 'Jill', age: 42}],
      }
      Explanation:
      *//create variable "age" and get equal of value of all ages "person.age" <= (26, 31, 42, 42)
      *//check if we have anybody at groupedPeople[age] on first iteration ({start value is empty = null })
      *//then create assign to groupedPeople[age] empty array []
      *//then push to this empty array "person" (objects of array "people")
      *//return groupedPeople *! remember, always return accumulator"!*
    `
    ,
    mainText : 'Note: only unique numbers are written when the variable "age" is created, so 2 arrays are placed in key 42',
  }
]

export default middleExamples

//\xa0