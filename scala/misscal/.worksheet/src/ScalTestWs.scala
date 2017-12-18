object ScalTestWs {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(63); 
  println("Welcome to the Scala worksheet");$skip(6); val res$0 = 
  2*2;System.out.println("""res0: Int(4) = """ + $show(res$0));$skip(12); 
  val n = 5;System.out.println("""n  : Int = """ + $show(n ));$skip(67); 
  var al:List[(Int,Int)] = List((0,1), (0,2), (0,3), (0,4), (1,1));System.out.println("""al  : List[(Int, Int)] = """ + $show(al ));$skip(189); 
  
  def playCompare(a:(Int,Int), b:(Int,Int)) = (a,b) match {
    case ((al,ap), (bl,bp)) =>
      if (ap != bp) bp > ap  // worse plays first
      else al > bl // longer plays first
  };System.out.println("""playCompare: (a: (Int, Int), b: (Int, Int))Boolean""");$skip(42); 
  
  val plays = al.sortWith(playCompare);System.out.println("""plays  : List[(Int, Int)] = """ + $show(plays ));$skip(28); 
  
  val rp = plays.reverse;System.out.println("""rp  : List[(Int, Int)] = """ + $show(rp ))}
}