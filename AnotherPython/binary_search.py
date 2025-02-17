def binary_search(target):
    arr = [a for a in range(1, 1001)]
    left = 0
    right = 1000
    found_index = -1

    while left <= right:
        mid = round((left + right) / 2)

        if arr[mid] == target:
            found_index = mid
            print('Число отгадано')
            break
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return found_index
    
a = binary_search(int(input()))
print('index: ',a)
