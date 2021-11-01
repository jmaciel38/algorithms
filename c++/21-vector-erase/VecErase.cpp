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
    int n, temp, q1, q2Ini, q2End;
    vector <int> v, q2;
    file >> n;
    // cin >> n;
    for (int m = 0; m < n; m++) {
      file >> temp;
      // cin >> temp;
      v.push_back(temp);
    }
    file >> q1 >> q2Ini >> q2End;
    // cin >> q1 >> q2Ini >> q2End;
    v.erase(v.begin()+q1-1);
    v.erase(v.begin()+q2Ini-1, v.begin()+q2End-1);
    cout << v.size() << "\n";
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