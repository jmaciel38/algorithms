#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <fstream>
#include <algorithm>
#include <cassert>
using namespace std;

ifstream file;
ifstream output;
// Write your Student class here
class Student {
  private:
    vector <int> scores;
  public:
    void input() {
      for(int m = 0; m < 5 ; m++) {
        int num;
        // cin >> num;
        file >> num;
        scores.push_back(num);
      }
    }
    int calculateTotalScore() {
      int sum = 0;
      for(int i = 0; i < scores.size(); i ++) {
        sum += scores[i];
      }
      return sum;
    }
};

int main() {
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    int n; // number of students
    // cin >> n;
    file >> n;
    Student *s = new Student[n]; // an array of n students
    for(int i = 0; i < n; i++){
        s[i].input();
    }
    // calculate kristen's score
    int kristen_score = s[0].calculateTotalScore();
    int person1 = s[1].calculateTotalScore();
    int person2 = s[2].calculateTotalScore();
    cout << "kristen score: " << kristen_score << "\n";
    cout << "person1 score: " << person1 << "\n";
    cout << "person2 score: " << person2 << "\n";
    // determine how many students scored higher than kristen
    int count = 0; 
    for(int i = 1; i < n; i++){
        int total = s[i].calculateTotalScore();
        if(total > kristen_score){
            count++;
        }
    }
    // print result
    cout << count;
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