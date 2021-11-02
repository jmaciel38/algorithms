//IntToString
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class IntToString {
  public static void main(String[] args) {
    try {
      File file = new File("./input/input00.txt");
      Scanner sc = new Scanner(file);
      int n = sc.nextInt();
      sc .close();
      //String s=???; Complete this line below
      String s = Integer.toString(n);
      //Write your code here

      
      if (n == Integer.parseInt(s)) {
      System.out.println("Good job");
      } else {
      System.out.println("Wrong answer.");
      }
    } catch (Exception e) {
      System.out.println("java.io.FileNotFoundException: "+ e);
    }
   }
}