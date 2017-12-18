object Tws {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(56); 
  println("Welcome to the Scala worksheet");$skip(17); 
  val v2 = 2 + 2;System.out.println("""v2  : Int = """ + $show(v2 ));$skip(97); 
  
  def fact(i:Long):Long = i match {
  case 0 => 1
  case 1 => 1
  case _ => i * fact(i-1)
  };System.out.println("""fact: (i: Long)Long""");$skip(11); val res$0 = 
  fact(20);System.out.println("""res0: Long = """ + $show(res$0));$skip(11); val res$1 = 
  
  3 + 3;System.out.println("""res1: Int(6) = """ + $show(res$1))}
}