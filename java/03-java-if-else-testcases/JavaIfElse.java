import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class JavaIfElse {

  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./input/input00.txt");
    Scanner scanner = new Scanner(file);
    int N = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
    if (N % 2 != 0) {
      System.out.println("Weird");
    } else if (N % 2 == 0 && (N >= 2 && N < 5)) {
      System.out.println("Not Weird");
    } else if (N % 2 == 0 && (N >= 6 && N <= 20)) {
      System.out.println("Weird");
    } else {
      System.out.println("Not Weird");
    }

    scanner.close();
  }
}