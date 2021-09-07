#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

int main() {
  std::ifstream file;
  int a, b;
  file.open("input/input00.txt");
  if ( file.is_open() ) {
    file >> a >> b;
    if(a <= b) {
      for(int n = a; n <= b; n++ ) {
        if( n < 1 ) {
          return 1;
        } else if (n == 1) {
          std::cout << "one\n";
        } else if (n == 2) {
          std::cout << "two\n";
        } else if (n == 3) {
          std::cout << "three\n";
        } else if (n == 4) {
          std::cout << "four\n";
        } else if (n == 5) {
          std::cout << "five\n";
        } else if (n == 6) {
          std::cout << "six\n";
        } else if (n == 7) {
          std::cout << "seven\n";
        } else if (n == 8) {
          std::cout << "eight\n";
        } else if (n == 9) {
          std::cout << "nine\n";
        }else {
          if (n % 2 == 0) {
            std::cout << "even\n";
          } else {
            std::cout << "odd\n";
          }
        }
      }
    }
  } else {
    std::cout << "file read error.\n\n";
  }
  file.close();
  return 0;
}