// Отличия var и let

// var хойстится let не хойстится

// console.log(firstName);// undefind

// console.log(firstName);
// let firstName = 'Jack';

// // Обьявление 2х let невозможно
// var firstName = "Jack";
// var firstName = 'John';
// console.log(firstName); будет john

// let firstName = 'Jack';
// let firstName = 'John';
// console.log(firstName); второй раз нельзя создавать

// var записывает в глобальный обьукт window
// var firstName = 'Jack';
// console.log(window.firstName);


//let не записывается в глоб обьект window

// let firstName = 'Jack';
// console.log(window.firstName);

// переменная обьявленна через const 
// унаследовала все принципы которые свойственны 
// пременной let, но с небольшими отличиями

//  Переменные let возможно
// let firstName = 'Jack';
// console.log(firstName);
// firstName = 'John';
// console.log(firstName);

// Переменная const невожможно
// const firstName = 'Jack';
// firstName = 'John';
// console.log(firstName); ошибка

//  Обьекты 

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ['John','luci']

//  Нестандартные значения ключей
// const notStandartFields = {
//     'kebab-case':'i can use it :D',
//     '0':10

// // Доступ к свойствам обьектф 
// console.log(person.name);
// console.log(notStandartFields['kebab-case']);
//  Переназначение свойств даже если это константа
// person.name = 'John';
// console.log(person);  //свойства можно менять на const в целом нельзя

//  Добавление свойства из вне
// person.weight = '80kg'
// console.log(person);


// удаление поля из обьекта
// delete person.name;
// console.log(person);


// Массивы

// Массив
// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

// // Длина массива
// console.log(arrNums.length);
// console.log(arrNums[0]);

// Доступ к последнему элементу массива
// console.log(arrNums[arrNums.length-1]);

// Переназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);

// Оператор инкремент
// let num = 0;

// console.log(++num);
// console.log(num)

// Циклы

// Цикл for
// for(let i = 0; i <= 100; i++) {
//     console.log('Итерация №' + i);
// }

const arrNums = [1,2,3,4,5];
// for (let i = 0; i < arrNums.length; i++) {
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);


// Поиск элемента в массиве циклом с условием
// let value = null;

// for (let i = 0; i < arrNums.length; i++) {
//     console.log(arrNums[i])
//     if (arrNums[i] === 4) value = arrNums[i];
// }
// console.log(value);

// Вытаскиваем элементы больше 3х в отдельный массив
// const arrNums2 = [1];

// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

//  Цикл wile
// let i = 0;

// wile (i < 10) {
//     console.log('Итерация №' + i++)
// }

// цикл do wile
// let i = 0;
// do {
//     console.log('Итерация №' + i++);
// } while (false);

// Методы массива stage 1 

const somefamily = [
    {
        name: 'March',
        position: 'Mother',
        age: 40
    },
    {
        name: 'Gomer',
        position: 'Father',
        age: 40
    },
    {
        name: 'Bart',
        position: 'Son',
        age: 10
    },
    {
        name: 'Lisa',
        position: 'Daughter',
        age: 8
    }
];

// Метод push \ pop
const newchild = {
    name: 'Maggi',
    position: 'Daughter',
    age: 2

}
// somefamily.pop()
// // somefamily.push(newchikd);
// console.log(somefamily);
// Методы Shift и unshift
// somefamily.unshift(newchild);
// console.log(somefamily);

//  Метод Splice
// somefamily.splice(1, 1);  //удаление
// console.log(somefamily);
// somefamily.splice(2, 0, newchild) ; добавление 
// console.log(somefamily)

//  Самостоятельно узнать про собрата spliceю Метод slice

//  Жизнь без метода forEach
const simpsonFamily = [];

// for (let i = 0; i < somefamily.length; i++) {
//     somefamily[i].lastName = 'Simpson';
//    simpsonFamily.push(simpsonFamily);
// }
// console.log(simpsonFamily);

// Жизнь с методом forEach
// somefamily.forEach(function(item) {
//     item.lastName = 'Simpson';
//     somefamily.push(item);


// })
// console.log(simpsonFamily);

//  Жизнь с методом map
// const simpsonFamily = somefamily.map(function(item) {
//     item.lastName = 'Simpson';
//     return item;
// });
// console.log(simpsonFamily);

// for (let x = 0; x < 3; x++) {
//     console.log(x, 'FIRST CYCLE');
//     for (let y = 0; y < 3; y++) {
//         console.log('SECOND CYCLE');
//     }
// }