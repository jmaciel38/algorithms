def find_percent(f):
    n = int(f.readline())
    student_marks = {}
    for _ in range(n):
        line = f.readline().split()
        name, scores = line[0], line[1:]
        scores = map(float, scores)
        student_marks[name] = scores
    query_name = f.readline()
    sum = 0
    div = 0
    av = 0
    for key in student_marks:
        if key == query_name:
          arr = list(student_marks[key])
          div = len(arr)
          for item in arr:
              sum += item
          if div > 0:
              av = sum / div
          print("%0.2f" % av)
          break

if __name__ == '__main__':
    f0 = open("./input/input00.txt", "r")
    f1 = open("./input/input01.txt", "r")
    find_percent(f0)
    find_percent(f1)