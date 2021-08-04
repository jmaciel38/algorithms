//JavaStaticBlock
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class JavaStaticBlock {
  static int B;
  static int H;
  static boolean flag = false;
  static {
    try {
      File file = new File("./input/input01.txt");
      Scanner sc = new Scanner(file);
      B = sc.nextInt();
      H = sc.nextInt();
      // // Constraints -100 <= B <= 100
      // if (B < -100 || B > 100) return;
      // // Constraints -100 <= H <= 100
      // if (H < -100 || H > 100) return;
      if (B > 0 && H > 0) {
        flag = true;
      } else {
        System.out.println("java.lang.Exception: Breadth and height must be positive");
      }
    } catch (Exception e) {
      System.out.println("java.io.FileNotFoundException: "+ e);
    }
  }
  public static void main(String []argh) {
    if(flag){
			int area = B * H;
			System.out.print(area);
		}
  }
}