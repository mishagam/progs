object MisScal {import scala.runtime.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(60); 
  println("Welcome to the Scala worksheet");$skip(7); val res$0 = 
  2*56;System.out.println("""res0: Int(112) = """ + $show(res$0));$skip(27); 
  val ls = List("2", "33");System.out.println("""ls  : List[java.lang.String] = """ + $show(ls ));$skip(14); val res$1 = 
  "125".toInt;System.out.println("""res1: Int = """ + $show(res$1));$skip(16); val res$2 = 
  ls.head.toInt;System.out.println("""res2: Int = """ + $show(res$2));$skip(24); val res$3 = 
  ls map (s => s.toInt);System.out.println("""res3: List[Int] = """ + $show(res$3));$skip(13); val res$4 = 
  Range(1,5);System.out.println("""res4: scala.collection.immutable.Range = """ + $show(res$4));$skip(24); val res$5 = 
  SmallNums.allPairs(3);System.out.println("""res5: List[(Int, Int)] = """ + $show(res$5));$skip(8); val res$6 = 
  ls(1);System.out.println("""res6: java.lang.String = """ + $show(res$6));$skip(30); 
  val o:Long = 1000000000000L;System.out.println("""o  : Long = """ + $show(o ));$skip(19); 
  val d:Double = o;System.out.println("""d  : Double = """ + $show(d ));$skip(30); 
  val sd = math.sqrt(d) + 0.9;System.out.println("""sd  : Double = """ + $show(sd ));$skip(26); 
  val od:Long = sd toLong;System.out.println("""od  : Long = """ + $show(od ))}
}