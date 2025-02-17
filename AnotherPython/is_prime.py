def is_prime(n):  
    if n <= 1:  
        return 'NO'
    if n == 2:  
        return 'YES'  
    if n % 2 == 0:  
        return 'NO' 
    for i in range(3, int(n**0.5) + 1, 2):  
        if n % i == 0:  
            return 'NO' 
    return 'YES'  


print(is_prime(int(input())))