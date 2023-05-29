def largest_prime_factor (x)
    max = 0
    largest_factor = 2
    while Math.sqrt(x).floor() + 1 > largest_factor
        while x % largest_factor == 0
            x = x / largest_factor
            max = largest_factor
        end
        largest_factor += 1
    end
    if x == 1
        return largest_factor
    else
        return x
    end
end

if __FILE__ == $0
    puts largest_prime_factor(600851475143)
end
