#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

int main() {
  std::ifstream file;
  file.open("input/input08.txt");
  if ( file.is_open() ) {
    int n;
    file >> n;
    if (n < 1 || n > 1000){
      return 1;
    }
    int arr[n];
    for(int i = 0; i < n; i++) {
      int item;
      file >> item;
      if (item < 1 || item > 10000){
        return 1;
      }
      arr[i] = item;
    }
    for (int j = n - 1; j >= 0; j--) {
      cout << arr[j] << " ";
    }
    file.close();
    return 0;
  } else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}