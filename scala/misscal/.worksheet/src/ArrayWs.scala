object ArrayWs {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(46); 
  var ar = Array.fill(10)(15);System.out.println("""ar  : Array[Int] = """ + $show(ar ));$skip(59); 
    var aa:Array[List[(Int,Int)]] = Array.fill(21)(List());System.out.println("""aa  : Array[List[(Int, Int)]] = """ + $show(aa ));$skip(21); 
   val l = List(1,2);System.out.println("""l  : List[Int] = """ + $show(l ));$skip(16); 
   val x = l(0);System.out.println("""x  : Int = """ + $show(x ));$skip(16); 
   val y = l(1);System.out.println("""y  : Int = """ + $show(y ))}
  
}