def check_str(s):
    # 1 - has any alphanumeric characters
    print(any([char.isalnum() for char in s]))
    # 2 - has any alphabetical characters
    print(any([char.isalpha() for char in s]))
    # 3 - has any digits
    print(any([char.isdigit() for char in s]))
    # 4 - has any lowercase characters
    print(any([char.islower() for char in s]))
    # 5 - has any uppercase characters
    print(any([char.isupper() for char in s]))

if __name__ == '__main__':
    print("OUT 00 _________________________________")
    f0 = open("./input/input00.txt", "r")
    s0 = f0.readline()
    check_str(s0)
    print("OUT 01 _________________________________")
    f1 = open("./input/input01.txt", "r")
    s1 = f1.readline()
    check_str(s1)
    print("OUT 02 _________________________________")
    f2 = open("./input/input02.txt", "r")
    s2= f2.readline()
    check_str(s2)
    print("OUT 03 _________________________________")
    f3 = open("./input/input03.txt", "r")
    s3 = f3.readline()
    check_str(s3)