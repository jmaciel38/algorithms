#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
using namespace std;


int main() {
  ifstream file;
  ifstream output;
  file.open("input/input07.txt");
  output.open("output/output07.txt");
  if ( file.is_open() && output.is_open()) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n, temp;
    vector <int> v;
    file >> n;
    for (int m = 0; m < n; m++) {
      file >> temp;
      v.push_back(temp);
    }
    sort(v.begin(), v.end());
    for(int k = 0; k < v.size(); k++) cout << v[k] << " ";
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