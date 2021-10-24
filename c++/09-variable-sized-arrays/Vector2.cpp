#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
using namespace std;

int main() {
  std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  vector<string> error;
  if ( file.is_open() && output.is_open()) {
    int n, q, k, el, i, j, sumK = 0, constNOK = 0;
    file >> n >> q;
    // scanf("%d %d", &n, &q);
    float limit = pow(10.0, 5.0);
    if(n < 1 || n > limit || q < 1 || q > limit) {
      constNOK ++;
      string err = "Error n/q constraint";
      error.push_back(err);
      return 1;
    }
    vector<vector<int>> N;
    vector<vector<int>> Q;
    for(int nv = 0; nv < n; nv ++) {
      file >> k;
      // scanf("%d", &k);
      sumK += k;
      if(k < 1 || k > 3 * limit) {
        constNOK ++;
        string err = "Error k constraint";
        error.push_back(err);
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
      constNOK ++;
      string err = "Error n/sumK constraint";
      error.push_back(err);
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
        constNOK ++;
        string err = "Error J constraint: ";
        err.append("j: ");
        err.append(std::to_string(Q[r][1]));
        err.append(" k: ");
        err.append(std::to_string(N[r][0]));
        err.append(" r: ");
        err.append(std::to_string(r));
        error.push_back(err);
        continue;//return 1;
      }else {
        int outputEl;
        output >> outputEl;
        if(N[ Q[r][0] ][ Q[r][1] + 1 ] == outputEl) {
          OK ++;
          // cout << endl;
          // cout << "test ok: "; 
          // cout << "query result: " << N[Q[r][0]][Q[r][1] + 1];
          // cout << " Correct answer: " << outputEl << endl << endl;
        } else {
          NOK ++;
          // cout << endl;
          // cout << "test Fail: "; 
          // cout << "query result: " << N[Q[r][0]][Q[r][1] + 1];
          // cout << " Correct answer: " << outputEl << endl << endl;
        }
      }
    }
    cout << endl;
    for(int i = 0; i < error.size(); i++) {
      cout << "error: " << error[i] << endl;
    }
    cout << endl << endl;
    cout << "Tests Ok:           " << OK << endl;
    cout << "Tests Errors:       " << NOK << endl;
    cout << "Query size:         " << Q.size() << endl;
    cout << "Array N size:       " << N.size() << endl;
    cout << "Constraints Errors: " << constNOK << endl << endl;
    return 0;
  }else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}