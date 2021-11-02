if __name__ == '__main__':
    # a = int(raw_input())
    # b = int(raw_input())
    f = open("./input/input00.txt", "r")
    a = int(f.readline())
    b = int(f.readline())
    print(a + b)
    print(a - b)
    print(a * b)