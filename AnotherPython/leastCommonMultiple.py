def arr(a, b):
    m = a * b
    while a != 0 and b != 0:
        if a > b:
            a %= b
        else:
            b %= a
    return m // (a + b)


a = int(input())
b = int(input())
print(arr(a, b))

