import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class SubStr {

  public static void main(String[] args) {
    try {

      Locale.setDefault(new Locale("en", "US"));
      File file = new File("./input/input00.txt");
      Scanner sc = new Scanner(file);
      String S = sc.next();
      int start = sc.nextInt();
      int end = sc.nextInt();
      String newStr = S.substring(start, end);
      System.out.println(newStr);

    } catch (Exception e) {

      System.out.println("java Error: "+ e);

    }
  }

}