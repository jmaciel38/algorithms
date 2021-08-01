//JavaDataTypes
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class JavaDataTypes {
  public static void main(String []argh) throws FileNotFoundException {
    File file = new File("./input/input00.txt");
    Scanner sc = new Scanner(file);
    int t = sc.nextInt();
    for(int i=0;i<t;i++)
    {
      try
      {
        long x=sc.nextLong();
        System.out.println(x+" can be fitted in:");
        if(x >= -128 && x <= 127) System.out.println("* byte");
        if(x >= - Math.pow(2, 15) && x <= Math.pow(2, 15) - 1) System.out.println("* short");
        if(x >= - Math.pow(2, 31) && x <= Math.pow(2, 31) - 1) System.out.println("* int");
        if(x >= - Math.pow(2, 63) && x <= Math.pow(2, 63) - 1) System.out.println("* long");
        //Complete the code
      }
      catch(Exception e)
      {
        System.out.println(sc.next()+" can't be fitted anywhere.");
      }
    }
  }
}