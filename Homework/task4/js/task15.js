// let numbers = []
// for (let i = 2; i <= 100; i++){
//     if(i % 3 === 0 || i % 5 ===0 || i % 7 === 0 ){
    
    
    
//     numbers.push(i)
//     }
    
    
// }
// console.log(numbers);

let country = ['Kyrgythstan', 'German','italy','Russian']
country.sort(function(a,b){
    return a.length - b.length
});
console.log(country);
console.log(country[0],country[country.length-1])