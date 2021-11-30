import java.io.*;
import java.util.*;


public class StrIntroI {

  public static void main(String[] args) {
    try {

      Locale.setDefault(new Locale("en", "US"));
      File file = new File("./input/input00.txt");
      Scanner sc = new Scanner(file);
      String A = sc.next();
      String B = sc.next();
      int sum = (A.length() + B.length());
      A = A.substring(0,1).toUpperCase() + A.substring(1).toLowerCase();
      B = B.substring(0,1).toUpperCase() + B.substring(1).toLowerCase();
      System.out.println( sum );
      System.out.println( A.compareTo(B) > 0 ? "Yes" : "No" );
      System.out.println( A + " " + B );

    } catch (Exception e) {

      System.out.println("java Error: "+ e);

    }
  }
}