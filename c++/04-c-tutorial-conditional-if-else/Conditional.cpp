#include <iostream>
#include <fstream>
#include <cstdio>
#include <math.h>

using namespace std;
int main() {
  std::ifstream file;
  file.open("input/input02.txt");
  int n;
  if ( file.is_open() ) {
    file >> n;
    if( n < 1 || n > pow(10.0, 9.0)) {
      return 1;
    } else if (n == 1) {
      std::cout << "one";
    } else if (n == 2) {
      std::cout << "two";
    } else if (n == 3) {
      std::cout << "three";
    } else if (n == 4) {
      std::cout << "four";
    } else if (n == 5) {
      std::cout << "five";
    } else if (n == 6) {
      std::cout << "six";
    } else if (n == 7) {
      std::cout << "seven";
    } else if (n == 8) {
      std::cout << "eight";
    } else if (n == 9) {
      std::cout << "nine";
    }else {
      std::cout << "Greater than 9";
    }
  } else {
    std::cout << "file read error.\n\n";
  }
  file.close();
  return 0;
}