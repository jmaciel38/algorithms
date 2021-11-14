def mutate_string(string, position, character):
    l = list(string.strip())
    l[position] = character
    result = ''.join(l)
    return result

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    s = f0.readline()
    i, c = f0.readline().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)