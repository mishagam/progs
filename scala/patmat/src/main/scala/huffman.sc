import scala.math.Ordering
import patmat.Huffman

object huffman {
  var s: String = "dwksfhwsdwkgwh"                //> s  : String = dwksfhwsdwkgwh
  var sl = s.toList;                              //> sl  : List[Char] = List(d, w, k, s, f, h, w, s, d, w, k, g, w, h)
  var l = List(1,4,2,6)                           //> l  : List[Int] = List(1, 4, 2, 6)
  l.sort(Ordering.Int.lt)                         //> res0: List[Int] = List(1, 2, 4, 6)
  Huffman.times(sl )                              //> res1: List[(Char, Int)] = List((w,4), (s,2), (k,2), (h,2), (g,1), (f,1), (d,
                                                  //| 2))
   Huffman.secret                                 //> res2: List[patmat.Huffman.Bit] = List(0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0,
                                                  //|  1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 
                                                  //| 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1)
   Huffman.encode(Huffman.frenchCode)(List('s'))  //> res3: List[patmat.Huffman.Bit] = List(0, 0, 0)
   Huffman.encode(Huffman.frenchCode)(List('a'))  //> res4: List[patmat.Huffman.Bit] = List(1, 1, 1, 1)
   
   Huffman.decode(Huffman.frenchCode, List(0,0,0))//> res5: List[Char] = List(s)
   Huffman.decodedSecret                          //> res6: List[Char] = List(h, u, f, f, m, a, n, e, s, t, c, o, o, l)
   
   Huffman.times(List())                          //> java.lang.UnsupportedOperationException: tail of empty list
                                                  //| 	at scala.collection.immutable.Nil$.tail(List.scala:404)
                                                  //| 	at scala.collection.immutable.Nil$.tail(List.scala:399)
                                                  //| 	at patmat.Huffman$.times(Huffman.scala:86)
                                                  //| 	at huffman$$anonfun$main$1.apply$mcV$sp(huffman.scala:17)
                                                  //| Output exceeds cutoff limit. 
   
   
}