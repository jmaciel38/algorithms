import textwrap

def wrap(string, max_width):
    wraped = textwrap.fill(string, max_width)
    return wraped

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    string, max_width = f0.readline(), int(f0.readline())
    result = wrap(string, max_width)
    print("OUT 00 _________________________________")
    print(result)