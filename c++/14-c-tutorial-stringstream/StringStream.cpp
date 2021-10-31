#include <sstream>
#include <vector>
#include <iostream>
#include <fstream>
using namespace std;

vector<int> parseInts(string str) {
	stringstream ss(str);
  vector<int> result;
  int num;
  char ch;
  while (!ss.eof()) {
    ss >> num;
    ss >> ch;
    result.push_back(num);
  }
  return result;
}

int main() {
  std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    string str;
    // cin >> str;
    file >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
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