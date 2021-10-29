//Solution in discutions of problem.
#define toStr(x) #x
#define io(v) file >> v
// #define io(v) cin >> v
#define FUNCTION(name,operator) inline void name(int &current, int candidate) {!(current operator candidate) ? current = candidate : false;}
#define INF (unsigned)!((int)0)
#define foreach(v, i) for (int i = 0; i < v.size(); ++i)

#include <iostream>
#include <vector>
#include <fstream>
using namespace std;


#if !defined toStr || !defined io || !defined FUNCTION || !defined INF
#error Missing preprocessor definitions
#endif 

FUNCTION(minimum, <);
FUNCTION(maximum, >);

/* sugestion of optmization in discutions of challenge.*/
int start_up() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    return 0;
}

int static r = start_up();

#define endl '\n';

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
    // cout << "This is the line number " << __LINE__;
    // cout << " of file " << __FILE__ << ".\n";
    // cout << "Its compilation began " << __DATE__;
    // cout << " at " << __TIME__ << ".\n";
    // cout << "The compiler gives a __cplusplus value of " << __cplusplus;
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