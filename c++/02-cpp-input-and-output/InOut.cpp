#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

int main() {
  std::ifstream file;
  int a, b, c, sum;
  file.open("input/input00.txt");
  if ( file.is_open() ) {
    file >> a >> b >> c;
    if( a < 1 || a > 1000)
    return 1;
    if( b < 1 || b > 1000)
    return 1;
    if( b < 1 || b > 1000)
    return 1;
    sum = a + b + c;
    cout << sum;
  } else {
    std::cout << "file read error.\n\n";
  }
  file.close();
  return 0;
}