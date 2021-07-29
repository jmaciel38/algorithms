//JavaLoopsI.java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class JavaLoopsI {

  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./input/input01.txt");
    Scanner sc = new Scanner(file);
    int x = sc.nextInt();
    for (int i = 1; i < 11; i++) {
      int res = x * i;
      System.out.println("" + x + " x " + i + " = " + res);
    }
  }
}