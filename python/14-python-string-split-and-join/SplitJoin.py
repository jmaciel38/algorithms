def split_and_join(line):
    # write your code here
    arr = line.split()
    join = '-'.join(arr)
    return join

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    line = f0.readline()
    result = split_and_join(line)
    print(result)