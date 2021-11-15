def door_mat(lines, columns):
    div = '.|.'
    welcome = 'WELCOME'.center(columns, '-')
    mid = int(lines / 2)+1
    for i in range(mid):
        if i == (int(lines / 2)):
            print(welcome)
        else:
            print((div*((i*2) + 1)).center(columns, '-'))
    for i in reversed(range(1,mid)):
        print((div*((i*2) - 1)).center(columns, '-'))

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    mat_size = f0.readline().split()
    lines, columns = int(mat_size[0]), int(mat_size[1])
    result = door_mat(lines, columns)