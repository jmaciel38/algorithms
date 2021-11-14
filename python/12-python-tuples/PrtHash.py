def prt_results(f):
    n = int(f.readline())
    integer_list = map(int, f.readline().split())
    t = tuple(integer_list)
    print(hash(t))

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    prt_results(f0)