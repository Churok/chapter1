// function declaration
// name arguments
// function square(a,b) {
//     console.log(a * b);
// }
// square(2,2);
// square(5,5);

// function checkArg() {
//     console.log(arguments);

// }
// checkArg('John', 20);

// function square(a,b){
//     return a * b;
//     console.log('Does not work');
// }

// const firstResults = square(2,2);
// const secondResults = square(5,5);

// console.log(firstResults, secondResults);

//  Exampl 1 
// function lineShortener(str,chars = 5) {
//     let arr = [];
//     for(let i = 0; i <= chars; i++) arr.push(str[i]);
//     return arr.join('') + '...';


// }
//  const longStr = 'its very long string';
//  const shortStr = lineShortener(longStr);
//  const secondshortStr = lineShortener('hello its me');

//  console.log(shortStr, secondshortStr);


//   Exampl 2

// function isEmptyArray(value) {
//     return Array.isArray(value) && value.length === 0;
// }
// console.log(isEmptyArray({name: 'Jack'}));
// console.log(isEmptyArray([]));

// function EXPRESSION
// const multiple = function(a,b) {
//     console.log(a * 2, b * 2);      анонимная функция

// }
// multiple(3,6);

//  Methods

// const person = {
//     name: 'Jack',
//     birthYear: 1980,
//     getAge: function() {
//         console.log(this);
//         return 2020 - this.birthYear
//     },
//     sayHello: function(){
//      console.log(this.name + ' say hello');
//     }, 
//     changeName: function(newName){
//         if(typeof newName !== 'string') {
//             console.error('To change name, enter the line');
//             return;

//         }
//         this.name = newName;
//     }

// }


// const ageOfPerson = person.getAge();
// // console.log(ageOfPerson);
// person.changeName('Jim');
// console.log(person.name)

    
