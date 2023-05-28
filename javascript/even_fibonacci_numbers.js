let fib_1 = 1;
let fib_2 = 2;
let sum = 0;
while (fib_2 < 4000000){
    if (fib_2 % 2 == 0) {
        sum += fib_2;
    }
    let temp = fib_2;
    fib_2 += fib_1;
    fib_1 = temp;
}
console.log(sum);