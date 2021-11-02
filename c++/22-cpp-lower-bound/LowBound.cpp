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
  file.open("input/input16.txt");
  output.open("output/output16.txt");
  if ( file.is_open() && output.is_open()) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n, temp, numQ, q;
    vector<int>::iterator low;
    vector <int> v;
    file >> n;
    // cin >> n;
    for(int i = 0; i < n; i++) {
      file >> temp;
      // cin >> temp;
      v.push_back(temp);
    }
    file >> numQ;
    // cin >> numQ;
    sort(v.begin(), v.end());
    for(int j = 0; j < numQ; j++) {
      file >> q;
      // cin >> q;
      low = lower_bound (v.begin(), v.end(), q);
      if (std::binary_search (v.begin(), v.end(), q)){
        cout << "Yes" << " " << ((low- v.begin()) + 1) << '\n';
      } else {
        std::cout << "No" << " " << ((low- v.begin()) + 1) << '\n';
      }
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