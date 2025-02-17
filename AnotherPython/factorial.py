def factorial(b):
    if b == 1:
        return 1
    else:
        return b * factorial(b - 1)


print(factorial(int(input())))