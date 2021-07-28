//JavaOutputFormat.java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class JavaOutputFormat {

  public static void main(String[] args) throws FileNotFoundException {
    File file = new File("./input/input00.txt");
    Scanner sc = new Scanner(file);
    System.out.println("================================");
    for(int i=0;i<3;i++){
      String s1=sc.next();
      int x=sc.nextInt();
      int diff =  15 - s1.length();
      //Complete this line
      System.out.println("string length is: "+s1.length());//10 is the length of javatpoint string
      System.out.println("Diff is: "+diff);
    }
    System.out.println("================================");

  }
}