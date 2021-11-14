def prt_results(f):
    N = int(f.readline())
    arr = []
    for _ in range(N):
        line = f.readline().split()
        if line[0] == 'insert':
            arr.insert(int(line[1]), int(line[2]))
        if line[0] == 'print':
            print(arr)
        if line[0] == 'remove':
            arr.remove(int(line[1]))
        if line[0] == 'append':
            arr.append(int(line[1]))
        if line[0] == 'sort':
            arr.sort()
        if line[0] == 'pop':
            arr.pop()
        if line[0] == 'reverse':
            arr.reverse()

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    prt_results(f0)