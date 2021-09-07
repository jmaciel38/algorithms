#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max_of_four(int a, int b, int c, int d) {
  int greater = 0;
  if (a > greater)
    greater = a;
  if (b > greater)
    greater = b;
  if (c > greater)
    greater = c;
  if (d > greater)
    greater = d;
  return greater;
}

int main() {
    int a, b, c, d;
    std::ifstream file;
    // scanf("%d %d %d %d", &a, &b, &c, &d);
    file.open("input/input00.txt");
    if ( file.is_open() ) {
    file >> a >> b >> c >> d;
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    file.close();
    return 0;
    } else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}