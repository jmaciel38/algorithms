import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class JavaStdinStdout {

  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./input/input00.txt");
    Scanner scan = new Scanner(file);
    int a = scan.nextInt();
    int b = scan.nextInt();
    int c = scan.nextInt();

    System.out.println(a);
    System.out.println(b);
    System.out.println(c);
  }
}