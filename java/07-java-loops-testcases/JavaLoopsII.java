//JavaLoopsII
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class JavaLoopsII {
  public static void main(String []argh) throws FileNotFoundException {
    File file = new File("./input/input01.txt");
    Scanner in = new Scanner(file);
    int t = in.nextInt();
    // Constraints 0 <= q , "t", <= 500
    if (t < 0 || t > 500) return;
    for (int i = 0; i < t; i++) {
      String result = "";
      int a = in.nextInt();
      int b = in.nextInt();
      int n = in.nextInt();
      // Constraints 0 <= a <= 50
      if (a < 0 || a > 50) return;
      // Constraints 0 <= b <= 50
      if (b < 0 || b > 50) return;
      // Constraints 1 <= n <= 15
      if (n < 1 || n > 15) return;
      for (int j = 0; j < n; j++) {
        a += (int) b * Math.pow(2, j);
        result += a;
        result += " ";
      }
      System.out.println(result);
    }
    in.close();
  }
}