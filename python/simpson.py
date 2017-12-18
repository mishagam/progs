#!/usr/bin/python

import math

def simpson(f, a, b, n):
    """Approximates the definite integral of f from a to b by the
    composite Simpson's rule, using n subintervals (with n even)"""

    if n % 2:
        raise ValueError("n must be even (received n=%d)" % n)

    h = (b - a) / n
    s = f(a) + f(b)

    for i in range(1, n, 2):
        s += 4 * f(a + i * h)
    for i in range(2, n-1, 2):
        s += 2 * f(a + i * h)

    return s * h / 3

# Demonstrate that the method is exact for polynomials up to 3rd order
print(simpson(lambda x:x**3, 0.0, 10.0, 2))       # 2500.0
print(simpson(lambda x:x**3, 0.0, 10.0, 100000))  # 2500.0

print(simpson(lambda x:x**4, 0.0, 10.0, 2))       # 20833.3333333
print(simpson(lambda x:x**4, 0.0, 10.0, 100000))  # 20000.0
print(simpson(lambda x:math.exp(x), 0.0, 1.0, 20))  # 20000.0
