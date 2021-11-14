if __name__ == '__main__':
    f = open("./input/input00.txt", "r")
    n = int(f.readline())
    arr = map(int, f.readline().split())
    a = sorted(arr, reverse=True)
    for index, item in enumerate(a) :
        if a[index+1] < a[index]:
          print(a[index+1])
          break