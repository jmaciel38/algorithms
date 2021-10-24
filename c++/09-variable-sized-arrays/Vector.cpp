#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
using namespace std;


int main() {
  /* Enter your code here. Read input from STDIN. Print output to STDOUT */
  /**
   * https://www.codeguru.com/cplusplus/c-tutorial-a-beginners-guide-to-stdvector-part-1/
   * std::vector<int> v;    // declares a vector of integers
   * 2 2 : n (nUMBER of arrays)and q (nUMBER of querys);
   * 3 1 5 4 : K ( array length, first digit) and the array;
   * 5 1 2 8 9 3 : K ( array length, first digit) and the array;
   * 0 1 : i ( query index q, first digit) and j array index of query;
   * 1 3 : i ( query index q, first digit) and j array index of query;
   */
  std::ifstream file;
  std::ifstream output;
  file.open("input/input04.txt");
  output.open("output/output04.txt");
  if ( file.is_open() && output.is_open()) {
    int n, q, k, el, i, j, sumK = 0;
    file >> n >> q;
    // scanf("%d %d", &n, &q);
    float limit = pow(10.0, 5.0);
    if(n < 1 || n > limit || q < 1 || q > limit) {
      cout  << "Error n/q constraint" << endl;
      return 1;
    }
    vector<vector<int>> N;
    vector<vector<int>> Q;
    for(int nv = 0; nv < n; nv ++) {
      file >> k;
      // scanf("%d", &k);
      sumK += k;
      if(k < 1 || k > 3 * limit) {
        cout  << "Error k constraint" << endl;
        return 1;
      }
      vector<int> N1;
      N1.push_back(k);
      for(int a = 0; a < k; a++) {
        file >> el;
        // scanf("%d", &el);
        N1.push_back(el);
      }
      N.push_back(N1);
    }
    if(n > sumK || sumK > 3 * limit) {
      cout  << "Error n/sumK constraint" << endl;
      return 1;
    }
    for(int nq = 0; nq < q; nq ++) {
      file >> i >> j;
      // scanf("%d %d", &i, &j);
      vector<int> Q1;
      Q1.push_back(i);
      Q1.push_back(j);
      Q.push_back(Q1);
    }
    int OK = 0, NOK = 0;
    for (int r = 0; r < Q.size(); r++)
    {
      if(Q[r][1] < 0  || Q[r][1] >= N[Q[r][0]][0]) {
        // cout  << "Error J constraint" << endl;
        // continue;
        return 1;
      }else {
        int outputEl;
        output >> outputEl;
        if(N[Q[r][0]][Q[r][1] + 1] == outputEl) {
          OK ++;
          cout << endl;
          cout << "test ok: "; 
          cout << "query result: " << N[Q[r][0]][Q[r][1] + 1];
          cout << " Correct answer: " << outputEl << endl << endl;
        } else {
          NOK ++;
          cout << endl;
          cout << "test Fail: "; 
          cout << "query result: " << N[Q[r][0]][Q[r][1] + 1];
          cout << " Correct answer: " << outputEl << endl << endl;
        }
      }
    }
    cout << "Tests Ok: " << OK << " Tests Errors: " << NOK << endl << endl;
    return 0;
  }else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}