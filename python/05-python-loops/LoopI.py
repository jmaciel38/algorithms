if __name__ == '__main__':
    # n = int(raw_input())
    f = open("./input/input00.txt", "r")
    n = int(f.readline())
    for x in range(n):
        print(x ** 2)