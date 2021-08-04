//JavaEndFile
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class JavaEndFile {
  public static void main(String []argh) throws FileNotFoundException {
    File file = new File("./input/input02.txt");
    Scanner sc = new Scanner(file);
    boolean next = sc.hasNext();
    String line;
    int count = 1;
     while (next) {
      line = sc.nextLine();
      System.out.println(""+ count + " " + line);
      count ++;
      next = sc.hasNext();
     }
  }
}