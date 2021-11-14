def swap_case(s):
    swaped = ''
    for i in range(len(s)):
        if s[i].islower():
            swaped += s[i].capitalize()
        elif s[i].isupper():
            swaped += s[i].casefold()
        else:
            swaped += s[i]

    return swaped

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    s = f0.readline()
    result = swap_case(s)
    print(result)