object MapWs {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(43); 
  val m = Map[String, Int]();System.out.println("""m  : scala.collection.immutable.Map[String,Int] = """ + $show(m ));$skip(32); 
  val ma = m ++ Map("aaa" -> 1);System.out.println("""ma  : scala.collection.immutable.Map[String,Int] = """ + $show(ma ));$skip(36); val res$0 = 
  ma ++ Map("bb" -> 44, "aaa" -> 2);System.out.println("""res0: scala.collection.immutable.Map[String,Int] = """ + $show(res$0));$skip(51); 
  val mp = Map[(Int,Int), Int]((1,2)->3, (1,3)->4);System.out.println("""mp  : scala.collection.immutable.Map[(Int, Int),Int] = """ + $show(mp ));$skip(12); val res$1 = 
  mp((1,3));System.out.println("""res1: Int = """ + $show(res$1));$skip(56); val res$2 = 
  for {
  	pr <- mp.keys
  	v <- mp get pr
  } yield(v);System.out.println("""res2: Iterable[Int] = """ + $show(res$2));$skip(13); val res$3 = 
  (11 -> 12);System.out.println("""res3: (Int, Int) = """ + $show(res$3));$skip(77); 
  // Map(List((1->3),(2->4)))
  val la = List("a"-> 1, "22"-> 22, "33"-> 33);System.out.println("""la  : List[(java.lang.String, Int)] = """ + $show(la ));$skip(11); val res$4 = 
  la toMap;System.out.println("""res4: scala.collection.immutable.Map[java.lang.String,Int] = """ + $show(res$4));$skip(28); 
  
  val lh = List(1,4,5,6);System.out.println("""lh  : List[Int] = """ + $show(lh ));$skip(29); val res$5 = 
  (lh reverse) mkString "::";System.out.println("""res5: String = """ + $show(res$5))}
}