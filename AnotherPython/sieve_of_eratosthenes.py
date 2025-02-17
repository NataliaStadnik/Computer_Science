def eras(num):
    is_prime = [True for i in range(num + 1)]
    is_prime[0] = False
    is_prime[1] = False

    primes = []

    for i in range(2, num + 1):
        if is_prime[i] == True:
            primes.append(i)

            nex_num = i ** 2

            while nex_num <= num:
                is_prime[nex_num] = False
                nex_num += i
    return primes


print(eras(int(input())))