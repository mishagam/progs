package forcomp

import forcomp.Anagrams._

object MisAnag {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(154); 
  // forcomp.loadDictionary
  def charEq(a:(Char, Int), b:(Char, Int)):Boolean = a._1 == b._1;System.out.println("""charEq: (a: (Char, Int), b: (Char, Int))Boolean""");$skip(123); 
  def toPairsList(s : String): List[(Char, Int)] =
		if (s.isEmpty) List()
		else (s(0), 1) :: toPairsList(s.substring(1));System.out.println("""toPairsList: (s: String)List[(Char, Int)]""");$skip(73); 
  def toPL(s : String): List[(Char, Int)] =
  	s.toList map (c => (c,1));System.out.println("""toPL: (s: String)List[(Char, Int)]""");$skip(46); 
  
  val pairs = toPL ("ahsdkjasdhak" sorted);System.out.println("""pairs  : List[(Char, Int)] = """ + $show(pairs ));$skip(39); 
  val psor = pairs groupBy (p => p._1);System.out.println("""psor  : scala.collection.immutable.Map[Char,List[(Char, Int)]] = """ + $show(psor ));$skip(52); 
  val pnum = psor map {case (c,l) => (c, l.length)};System.out.println("""pnum  : scala.collection.immutable.Map[Char,Int] = """ + $show(pnum ));$skip(56); 
  val wo = Anagrams.wordOccurrences("msdjkashf hkdsfh");System.out.println("""wo  : forcomp.Anagrams.Occurrences = """ + $show(wo ));$skip(54); 
  val so = Anagrams.sentenceOccurrences(List("mama"));System.out.println("""so  : forcomp.Anagrams.Occurrences = """ + $show(so ));$skip(30); val res$0 = 
  Anagrams.packOccu(List(wo));System.out.println("""res0: forcomp.Anagrams.Occurrences = """ + $show(res$0));$skip(40); val res$1 = 
  Anagrams.combinations(List(('a', 4)));System.out.println("""res1: List[forcomp.Anagrams.Occurrences] = """ + $show(res$1));$skip(29); val res$2 = 
  List(1,3,5) == List(2,3,5);System.out.println("""res2: Boolean = """ + $show(res$2));$skip(29); val res$3 = 
  List(1,3,5) == List(1,3,5);System.out.println("""res3: Boolean = """ + $show(res$3));$skip(12); val res$4 = 
  List(Nil);System.out.println("""res4: List[scala.collection.immutable.Nil.type] = """ + $show(res$4))}
                                                  
}