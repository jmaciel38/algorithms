#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
using namespace std;

/*
    add code for struct here.
*/
struct Student {
  int age;
  string first_name;
  string last_name;
  int standard;
};

int main() {
  std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    Student st;
    file >> st.age >> st.first_name >> st.last_name >> st.standard;
    cout << st.age << " " << st.first_name << " " << st.last_name << " " << st.standard;
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