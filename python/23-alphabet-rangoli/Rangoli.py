import string

def print_rangoli(size):
    # your code goes here
    alphabet = string.ascii_lowercase
    r = size * 2 - 1
    r_mid = r // 2
    for i in range(r):
        if i < r_mid:
          print(i)
    for i in reversed(range(r_mid)):
        print(i)
    print(r, r_mid, alphabet, alphabet[size-1])

if __name__ == '__main__':
    f0 = open("./input/input06.txt", "r")
    n = int(f0.readline())
    print_rangoli(n)