for (let i = 3; i <= 100; i++){
    if (i % 15 ==0){
    console.log('FIZZBUZZ', i);
    }else if (i % 5 == 0){
        console.log('BUZZ', i );
    }else if (i % 3 == 0){
        console.log('fizz', i)
    }
}