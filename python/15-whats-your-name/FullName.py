def print_full_name(first, last):
    # Write your code here
    txt = "Hello {} {}! You just delved into python."
    result = txt.format(first.strip(), last.strip())
    print(result)

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    first_name = f0.readline()
    last_name = f0.readline()
    print_full_name(first_name, last_name)