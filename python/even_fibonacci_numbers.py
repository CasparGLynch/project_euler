fib_1 = 1
fib_2 = 2
sum = 0
while fib_2 < 4000000:
    if fib_2 % 2 == 0:
        sum += fib_2
    temp = fib_2 
    fib_2 += fib_1
    fib_1 = temp

print(sum)
