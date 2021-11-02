import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class CurrFormat {
  public static void main(String[] args) {
    try {
      Locale.setDefault(new Locale("en", "US"));
      File file = new File("./input/input00.txt");
      Scanner sc = new Scanner(file);
      double payment = sc.nextDouble();
      sc.close();
      NumberFormat nfUs = NumberFormat.getCurrencyInstance(Locale.US);
      NumberFormat nfIndia = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
      NumberFormat nfChina = NumberFormat.getCurrencyInstance(new Locale("zh", "CN"));
      NumberFormat nfFrench = NumberFormat.getCurrencyInstance(new Locale("fr", "FR"));
      String us = nfUs.format(payment);
      String india = nfIndia.format(payment);
      String china = nfChina.format(payment);
      String france = nfFrench.format(payment);
      System.out.println("US: " + us);
      System.out.println("India: " + india);
      System.out.println("China: " + china);
      System.out.println("France: " + france);
    } catch (Exception e) {
      System.out.println("java Error: "+ e);
    }
  }
}