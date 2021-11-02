def is_leap(year):
    leap = False
    if year % 4 == 0 and year % 400 == 0:
        leap = True
    elif year % 4 == 0 and year % 100 != 0:
        leap = True
    return leap

# year = int(raw_input())
f = open("./input/input00.txt", "r")
year = int(f.readline())
print (is_leap(year))
f = open("./input/input01.txt", "r")
year = int(f.readline())
print (is_leap(year))
f = open("./input/input02.txt", "r")
year = int(f.readline())
print (is_leap(year))
f = open("./input/input04.txt", "r")
year = int(f.readline())
print (is_leap(year))