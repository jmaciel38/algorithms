#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
using namespace std;

/**
 * estudar mais
 */
class Matrix {
  public:
  vector <vector<int>> a;
  Matrix & operator + (const Matrix &v) {
    for(int m = 0; m < v.a.size(); m++) {
      for (int n = 0; n < v.a[0].size(); n++) {
        this->a[m][n] = this->a[m][n] + v.a[m][n];
      }
    }
    return *this;
  }
};

int main () {
    std::ifstream file;
    std::ifstream output;
    file.open("input/input00.txt");
    output.open("output/output00.txt");
    if ( file.is_open() && output.is_open()) {
      int cases,k;
      cin >> cases;
      for(k=0;k<cases;k++) {
        Matrix x;
        Matrix y;
        Matrix result;
        int n,m,i,j;
        cin >> n >> m;
        for(i=0;i<n;i++) {
          vector<int> b;
          int num;
          for(j=0;j<m;j++) {
              cin >> num;
              b.push_back(num);
          }
          x.a.push_back(b);
        }
        for(i=0;i<n;i++) {
          vector<int> b;
          int num;
          for(j=0;j<m;j++) {
              cin >> num;
              b.push_back(num);
          }
          y.a.push_back(b);
        }
        result = x+y;
        for(i=0;i<n;i++) {
          for(j=0;j<m;j++) {
              cout << result.a[i][j] << " ";
          }
          cout << endl;
        }
      }
      return 0;
    }else {
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