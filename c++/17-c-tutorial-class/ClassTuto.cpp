#include <iostream>
#include <sstream>
#include <fstream>
using namespace std;

/*
Enter code for class Student here.
Read statement for specification.
*/
class Student {
  private:
    int age, standard;
    string first_name, last_name;
  public:
    void set_age(int ag) {
      age = ag;
    }
    void set_standard(int st) {
      standard = st;
    }
    void set_first_name(string fName) {
      first_name = fName;
    }
    void set_last_name(string lName) {
      last_name = lName;
    }
    int get_age() {
      return age;
    }
    int get_standard() {
      return standard;
    }
    string get_first_name() {
      return first_name;
    }
    string get_last_name() {
      return last_name;
    }
    string to_string() {
      string result;
      result += std::to_string(age);
      result += ",";
      result += first_name;
      result += ",";
      result += last_name;
      result += ",";
      result += std::to_string(standard);
      return result;
    }
};

int main() {
    int age, standard;
    string first_name, last_name;
    std::ifstream file;
  std::ifstream output;
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    // cin >> age >> first_name >> last_name >> standard;
    file >> age >> first_name >> last_name >> standard;
    Student st;
    st.set_age(age);
    st.set_standard(standard);
    st.set_first_name(first_name);
    st.set_last_name(last_name);
    cout << st.get_age() << "\n";
    cout << st.get_last_name() << ", " << st.get_first_name() << "\n";
    cout << st.get_standard() << "\n";
    cout << "\n";
    cout << st.to_string();
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