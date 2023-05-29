function largest_prime_factor(x) {
    let largest = 2;
    let max = 0;
    while ((Math.floor(Math.sqrt(x)) + 1) > largest) {
        while (x % largest == 0) {
            x /= largest;
            max = largest;
        }
        largest++;
    }
    if (x == 1) {
        return max;
    } else {
        return x;
    }

}

if (require.main === module){
    console.log(largest_prime_factor(600851475143));
}