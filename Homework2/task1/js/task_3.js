function fibonacci(n) {
    return n <=1 ? n : fibonacci(n - 1) + (n - 2)
}
 console.log(fibonacci(5))
// function fibonacci(n) {
//     if( n== 0) {return 0}
//     let fibo = [0,1];
//     for(let i = 1; i = fibo.length; i++) {
//         fibo.push(fibo[i] + [i-1])
//     };
//     return fibo.pop()
// }
// console.log(fibo)