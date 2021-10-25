#define toStr(x) #x
#define io(arr)
#define FUNCTION(arr, s)
#define INF(arr)


#include <iostream>
#include <vector>
#include <fstream>
using namespace std;


#if !defined toStr || !defined io || !defined FUNCTION || !defined INF
#error Missing preprocessor definitions
#endif 

FUNCTION(minimum, <);
FUNCTION(maximum, >);

int main(){
  std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    // int n; cin >> n;
    int n; file >> n;
    vector<int> v(n);
    foreach(v, i) {
      io(v)[i];
    }
    int mn = INF;
    int mx = -INF;
    foreach(v, i) {
      minimum(mn, v[i]);
      maximum(mx, v[i]);
    }
    int ans = mx - mn;
    cout << toStr(Result =) <<' '<< ans;
    cout << "This is the line number " << __LINE__;
    cout << " of file " << __FILE__ << ".\n";
    cout << "Its compilation began " << __DATE__;
    cout << " at " << __TIME__ << ".\n";
    cout << "The compiler gives a __cplusplus value of " << __cplusplus;
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