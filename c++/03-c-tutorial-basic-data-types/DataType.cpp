#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

int main() {
  std::ifstream file;
  file.open("input/input00.txt");
  int numInt;
  long numLong;
  char ltChar;
  float numFloat;
  double numDouble;
  if ( file.is_open() ) {
    file >> numInt >> numLong >> ltChar >> numFloat >> numDouble;
    // scanf("%d %ld %c %f %lf", &numInt, &numLong, &ltChar, &numFloat, &numDouble);
    printf("%d\n%ld\n%c\n%f\n%lf", numInt, numLong, ltChar, numFloat, numDouble);
  } else {
    std::cout << "file read error.\n\n";
  }
  file.close();
  return 0;
}