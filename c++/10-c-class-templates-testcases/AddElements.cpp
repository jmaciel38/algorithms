#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

template <class T>
class AddElements {
  T element;
  public:
  AddElements (T arg) {element=arg;}
  T add (T arg) {
    return element + arg;
  }
};

// class template specialization:
template <>
class AddElements <string> {
  string element;
  public:
  AddElements (string arg) {element=arg;}
  string concatenate (string arg) {
    return element.append(arg);
  }
};

int main () {
  std::ifstream file;
  std::ifstream output;
  file.open("input/input01.txt");
  output.open("output/output01.txt");
  if ( file.is_open() && output.is_open()) {
    int n,i, intEl1, intEl2;
    double dEl1, dEl2;
    string type, strEl1, strEl2;
    file >> n;
    for(i=0;i<n;i++) {
      file >> type;
      if(type=="float") {
          file >> dEl1 >> dEl2;
          AddElements<double> myfloat (dEl1);
          cout << myfloat.add(dEl2) << endl;
      }
      else if(type == "int") {
          file >> intEl1 >> intEl2;
          AddElements<int> myint (intEl1);
          cout << myint.add(intEl2) << endl;
      }
      else if(type == "string") {
          file >> strEl1 >> strEl2;
          AddElements<string> mystring (strEl1);
          cout << mystring.concatenate(strEl2) << endl;
      }
    }
    return 0;
  }else {
    std::cout << "file read error.\n\n";
    file.close();
    return 1;
  }
}