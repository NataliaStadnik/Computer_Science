def arr(a, b):
    a1 = abs(a)
    b1 = abs(b)
    if b == 0:
        print(a)
        return
    else:
        arr(b1, a1 % b1)


a = int(input())
b = int(input())
arr(a, b)