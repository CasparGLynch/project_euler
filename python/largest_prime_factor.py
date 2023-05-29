import math

def largest_prime_factor(x):
    max = 0
    for i in range(2, int(math.sqrt(x)) + 1, 1):
        while x % i == 0:
            x /= i
            max = i
    if x == 1.0:
        return max
    else:
        return x

if __name__ == '__main__':
    print(largest_prime_factor(600851475143))