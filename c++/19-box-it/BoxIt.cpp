#include<bits/stdc++.h>
#include <iostream>
#include <fstream>
using namespace std;

ifstream file;
ifstream output;
//Implement the class Box
//l,b,h are integers representing the dimensions of the box

class Box {
  private:
    int l = 0;
    int b = 0;
    int h = 0;
  public:
    // Box () {
    //   l = 0;
    //   b = 0;
    //   h = 0;
    // }
    Box (int length = 0, int breadth = 0, int height = 0) {
      l = length;
      b = breadth;
      h = height;
    }
    Box (const Box& B) {
      l = B.l;
      b = B.b;
      h = B.h;
    }
    int getLength() {
      return l;
    }
    int getBreadth () {
      return b;
    }
    int getHeight () {
      return h;
    }
    friend bool operator<(Box& a,Box& b){
      if( ( a.getLength() < b.getLength() ) || ( a.getBreadth() < b.getBreadth() && a.getLength() == b.getLength() )
      || ( a.getHeight() < b.getHeight() && a.getLength() == b.getLength() && a.getBreadth() < b.getBreadth() ) ){
        return true;
      } else {
        return false;
      }
    }
    friend ostream& operator << (ostream& out, Box& B) {
      return out << B.getLength() << " " << B.getBreadth() << " " << B.getHeight();
    }
    long long CalculateVolume() {
      return ( (long long) l * b * h );
    }
};

int start_up() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    return 0;
}

int static r = start_up();

#define endl '\n';

// int getLength(); // Return box's length
// int getBreadth (); // Return box's breadth
// int getHeight ();  //Return box's height
// long long CalculateVolume(); // Return the volume of the box

//Overload operator < as specified
//bool operator<(Box& b)

//Overload operator << as specified
//ostream& operator<<(ostream& out, Box& B)

void check2()
{
  
  file.open("input/input00.txt");
  output.open("output/output00.txt");
  if ( file.is_open() && output.is_open()) {
    int n;
    // cin>>n;
    file>>n;
    Box temp;
    for(int i=0;i<n;i++)
    {
      int type;
      // cin>>type;
      file>>type;
      if(type ==1)
      {
        cout<<temp<<endl;
      }
      if(type == 2)
      {
        int l,b,h;
        // cin>>l>>b>>h;
        file>>l>>b>>h;
        Box NewBox(l,b,h);
        temp=NewBox;
        cout<<temp<<endl;
      }
      if(type==3)
      {
        int l,b,h;
        // cin>>l>>b>>h;
        file>>l>>b>>h;
        Box NewBox(l,b,h);
        if(NewBox<temp)
        {
          cout<<"Lesser\n";
        }
        else
        {
          cout<<"Greater\n";
        }
      }
      if(type==4)
      {
        cout<<temp.CalculateVolume()<<endl;
      }
      if(type==5)
      {
        Box NewBox(temp);
        cout<<NewBox<<endl;
      }
    }
  } else {
    std::cout << "file read error.\n\n";
    file.close();
    cout << "This is the line number " << __LINE__;
    cout << " of file " << __FILE__ << ".\n";
    cout << "Its compilation began " << __DATE__;
    cout << " at " << __TIME__ << ".\n";
    cout << "The compiler gives a __cplusplus value of " << __cplusplus;
  }
}

int main()
{
  check2();
}