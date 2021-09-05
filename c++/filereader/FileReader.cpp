#include <iostream>
#include <fstream>
#include <cstdio>

using namespace std;

void myReadFile(string fileName) {
  string myText;
  std::ifstream myfile;
  myfile.open(fileName);
  if ( myfile.is_open() ) {
    while (myfile) {
      getline(myfile, myText);
      cout << "\n" << myText << "\n";
    }
  } else {
    std::cout << "file read error.\n\n";
  }
  myfile.close();
}

int main() {
  myReadFile("testfile.txt");
  return 0;
}