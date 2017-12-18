
import Anagrams._

object MisAnag {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(130); 
  // forcomp.loadDictionary
  def charEq(a:(Char, Int), b:(Char, Int)):Boolean = a._1 == b._1;System.out.println("""charEq: (a: (<error>, <error>), b: (<error>, <error>))<error>""");$skip(123); 
  def toPairsList(s : String): List[(Char, Int)] =
		if (s.isEmpty) List()
		else (s(0), 1) :: toPairsList(s.substring(1));System.out.println("""toPairsList: (s: <error>)<error>""");$skip(73); 
  def toPL(s : String): List[(Char, Int)] =
  	s.toList map (c => (c,1));System.out.println("""toPL: (s: <error>)<error>""");$skip(46); 
  
  val pairs = toPL ("ahsdkjasdhak" sorted);System.out.println("""pairs  : <error> = """ + $show(pairs ));$skip(39); 
  val psor = pairs groupBy (p => p._1);System.out.println("""psor  : <error> = """ + $show(psor ));$skip(52); 
  val pnum = psor map {case (c,l) => (c, l.length)};System.out.println("""pnum  : <error> = """ + $show(pnum ));$skip(48); 
  val wo = Anagrams.wordOccurrences("Maasshha");System.out.println("""wo  : <error> = """ + $show(wo ))}
}