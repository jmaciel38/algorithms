//JavaOutputFormat.java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class JavaOutputFormat {

  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./input/input01.txt");
    Scanner sc = new Scanner(file);
    System.out.println("================================");
    String val;
    String res = "";
    for(int i = 0; i < 3; i++){
      String s1 = sc.next();
      int x = sc.nextInt();
      int diff =  15 - s1.length();
      res += s1;
      for(int j = 0; j < diff; j++) {
        res += " ";
      }
      if (x < 10) {
        val = "00" + x;
      } else if (x < 100) {
        val = "0" + x;
      } else {
        val = "" + x;
      }
      res += val;
      System.out.println(res);
      res = "";
    }
    System.out.println("================================");
  }
}