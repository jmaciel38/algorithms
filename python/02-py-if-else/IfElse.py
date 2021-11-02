#!/bin/python

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    # n = int(raw_input().strip())
    f = open("./input/input02.txt", "r")
    n = int(f.readline())
    if n % 2 == 0 and n > 20:
        print("if Not Weird")
    elif n % 2 == 0 and n >= 6 and n <= 20:
        print("elif 1 Weird")
    elif n % 2 == 0 and n >= 2 and n <= 5:
        print("elif 2 Not Weird")
    else:
        print("else Weird")