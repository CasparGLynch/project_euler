<?php
function largest_prime_factor($x) {
    $largest = 2;
    $max = 0;
    while ((floor(sqrt($x)) + 1) > $largest) {
        while ($x % $largest == 0) {
            $x = $x / $largest;
            $max = $largest;
        }
        $largest += 1;
    }
    if ($x == 1) {
        return $max;
    } else {
        return $x;
    }
}

if (basename(__FILE__) === basename($_SERVER['PHP_SELF'])) {
    echo largest_prime_factor(600851475143);
}
?>