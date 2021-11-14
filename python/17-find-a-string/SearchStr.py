def count_substring(string, sub_string):
    result = 0
    l_index = -1
    for i in range(0, len(string)):
        s_index = string.find(sub_string, i)
        if s_index >= 0 and (l_index != s_index):
            result += 1
            l_index = s_index
    return result

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    string = f0.readline().strip()
    sub_string = f0.readline().strip()
    count = count_substring(string, sub_string)
    print(count)
    f1 = open("./input/input08.txt", "r")
    string1 = f1.readline().strip()
    sub_string1 = f1.readline().strip()
    count1 = count_substring(string1, sub_string1)
    print(count1)