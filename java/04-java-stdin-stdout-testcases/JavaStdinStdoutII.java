//JavaStdinStdoutII
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.Locale;

public class JavaStdinStdoutII {

    public static void main(String[] args) throws FileNotFoundException {
      Locale.setDefault(new Locale("en", "US"));
      File file = new File("./input/input00.txt");
      Scanner scan = new Scanner(file);
      int i = scan.nextInt();
      double d = scan.nextDouble();
      scan.nextLine();// for nextInt() behavior.
      String s = scan.nextLine();
      System.out.println("String: " + s);
      System.out.println("Double: " + d);
      System.out.println("Int: " + i);
    }
}