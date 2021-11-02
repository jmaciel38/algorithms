//DtTime
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.Locale;
import java.util.Calendar;

class DtTime {
  public static void main(String[] args) {
    try {
      File file = new File("./input/input00.txt");
      Scanner sc = new Scanner(file);
      int MM = sc.nextInt();
      int DD = sc.nextInt();
      int YYYY = sc.nextInt();
      sc .close();
      Calendar calendar = Calendar.getInstance(Locale.US);
      calendar.set(Calendar.MONTH, MM-1);
      calendar.set(Calendar.DAY_OF_MONTH, DD);
      calendar.set(Calendar.YEAR, YYYY);
      String dayWeek = calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.US);
      System.out.println(dayWeek.toUpperCase());
    } catch (Exception e) {
      System.out.println("java.io.FileNotFoundException: "+ e);
    }
  }
}