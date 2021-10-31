#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main() {
	// Complete the program
  std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    string str01, str02, str01b, str02b;
    int str01Len, str02Len;
    file >> str01;
    file >> str02;
    // cin >> str01;
    // cin >> str02;
    str01Len = str01.size();
    str02Len = str02.size();
    str01b = str01;
    str02b = str02;
    str02b[0] = str01[0];
    str01b[0] = str02[0];
    cout << str01Len << ' '  << str02Len << '\n';
    cout << ( str01 + str02 ) << '\n';
    cout << str01b << ' '  << str02b << '\n';
    return 0;
  } else {
    std::cout << "file read error.\n\n";
    file.close();
    cout << "This is the line number " << __LINE__;
    cout << " of file " << __FILE__ << ".\n";
    cout << "Its compilation began " << __DATE__;
    cout << " at " << __TIME__ << ".\n";
    cout << "The compiler gives a __cplusplus value of " << __cplusplus;
    return 1;
  }
}