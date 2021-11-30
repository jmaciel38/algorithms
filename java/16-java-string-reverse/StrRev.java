import java.io.*;
import java.util.*;
import java.lang.*;

public class StrRev {

  public static void main(String[] args) throws FileNotFoundException {

    Locale.setDefault(new Locale("en", "US"));
    File file = new File("./input/input00.txt");
    Scanner sc = new Scanner(file);
    String A = sc.next();
    StringBuilder strRev = new StringBuilder(A).reverse();
    System.out.println( A.equals(strRev.toString()) ? "Yes" : "No");

    try {

    } catch (Exception e) {

      System.out.println("java Error: "+ e);

    }
  }
}