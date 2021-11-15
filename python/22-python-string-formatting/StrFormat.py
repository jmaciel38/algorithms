def print_formatted(number):
    # your code goes here
    width = len(f'{number:b}')
    for i in range(1, number + 1):
      # Decimal Octal Hexadecimal (capitalized) Binary
        print(f'{i:{width}d}',f'{i:{width}o}',f'{i:{width}X}',f'{i:{width}b}')

if __name__ == '__main__':
    f0 = open("./input/input10.txt", "r")
    n = int(f0.readline().strip())
    print_formatted(n)