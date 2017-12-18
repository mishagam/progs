import scala.math.Ordering
import patmat.Huffman

object huffman {import scala.runtime.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(101); 
  var s: String = "dwksfhwsdwkgwh";System.out.println("""s  : String = """ + $show(s ));$skip(21); 
  var sl = s.toList;System.out.println("""sl  : List[Char] = """ + $show(sl ));$skip(24); ;
  var l = List(1,4,2,6);System.out.println("""l  : List[Int] = """ + $show(l ));$skip(26); val res$0 = 
  l.sort(Ordering.Int.lt);System.out.println("""res0: List[Int] = """ + $show(res$0));$skip(21); val res$1 = 
  Huffman.times(sl );System.out.println("""res1: List[(Char, Int)] = """ + $show(res$1));$skip(18); val res$2 = 
   Huffman.secret;System.out.println("""res2: List[patmat.Huffman.Bit] = """ + $show(res$2));$skip(49); val res$3 = 
   Huffman.encode(Huffman.frenchCode)(List('s'));System.out.println("""res3: List[patmat.Huffman.Bit] = """ + $show(res$3));$skip(49); val res$4 = 
   Huffman.encode(Huffman.frenchCode)(List('a'));System.out.println("""res4: List[patmat.Huffman.Bit] = """ + $show(res$4));$skip(55); val res$5 = 
   
   Huffman.decode(Huffman.frenchCode, List(0,0,0));System.out.println("""res5: List[Char] = """ + $show(res$5));$skip(25); val res$6 = 
   Huffman.decodedSecret;System.out.println("""res6: List[Char] = """ + $show(res$6));$skip(29); val res$7 = 
   
   Huffman.times(List());System.out.println("""res7: List[(Char, Int)] = """ + $show(res$7))}
   
   
}