import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class ReadFile {
  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./test01.txt");
    Scanner sc = new Scanner(file);
    while (sc.hasNext()) {
        System.out.print(sc.nextLine());
    }
    sc.close();
  }
}