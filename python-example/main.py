from random import randint

min_number = int(input("Enter the minimum number: "))
max_number = int(input("Enter the maximum number: "))

if (min_number > max_number):
    print("Minimum number should be less than maximum number")
else:
    print(randint(min_number, max_number))
