#include <iostream>
#include <fstream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

void update(int *a,int *b) {
  int a1 = (*a)+(*b);
  int b1 = abs((*a)-(*b));
  (*a) = a1;
  (*b) = b1;
}

int main() {
  int a, b;
  int *pa = &a, *pb = &b;
  std::ifstream file;
  file.open("input/input00.txt");
  if ( file.is_open() ) {
    // scanf("%d %d", &a, &b);
    file >> a >> b;
    update(pa, pb);
    printf("%d\n%d", a, b);
    return 0;
  } else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}