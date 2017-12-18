package forcomp

import forcomp.Anagrams._

object MisAnag {
  // forcomp.loadDictionary
  def charEq(a:(Char, Int), b:(Char, Int)):Boolean = a._1 == b._1
                                                  //> charEq: (a: (Char, Int), b: (Char, Int))Boolean
  def toPairsList(s : String): List[(Char, Int)] =
		if (s.isEmpty) List()
		else (s(0), 1) :: toPairsList(s.substring(1))
                                                  //> toPairsList: (s: String)List[(Char, Int)]
  def toPL(s : String): List[(Char, Int)] =
  	s.toList map (c => (c,1))                 //> toPL: (s: String)List[(Char, Int)]
  
  val pairs = toPL ("ahsdkjasdhak" sorted)        //> pairs  : List[(Char, Int)] = List((a,1), (a,1), (a,1), (d,1), (d,1), (h,1), 
                                                  //| (h,1), (j,1), (k,1), (k,1), (s,1), (s,1))
  val psor = pairs groupBy (p => p._1)            //> psor  : scala.collection.immutable.Map[Char,List[(Char, Int)]] = Map(s -> Li
                                                  //| st((s,1), (s,1)), j -> List((j,1)), a -> List((a,1), (a,1), (a,1)), h -> Lis
                                                  //| t((h,1), (h,1)), k -> List((k,1), (k,1)), d -> List((d,1), (d,1)))
  val pnum = psor map {case (c,l) => (c, l.length)}
                                                  //> pnum  : scala.collection.immutable.Map[Char,Int] = Map(s -> 2, j -> 1, a -> 
                                                  //| 3, h -> 2, k -> 2, d -> 2)
  val wo = Anagrams.wordOccurrences("msdjkashf hkdsfh")
                                                  //> wo  : forcomp.Anagrams.Occurrences = List(( ,1), (a,1), (d,2), (f,2), (h,3),
                                                  //|  (j,1), (k,2), (m,1), (s,3))
  val so = Anagrams.sentenceOccurrences(List("mama"))
                                                  //> so  : forcomp.Anagrams.Occurrences = List((a,2), (m,2))
  Anagrams.packOccu(List(wo))                     //> res0: forcomp.Anagrams.Occurrences = List(( ,1), (a,1), (d,2), (f,2), (h,3),
                                                  //|  (j,1), (k,2), (m,1), (s,3))
  Anagrams.combinations(List(('a', 4)))           //> res1: List[forcomp.Anagrams.Occurrences] = List(List(), List((a,1)), List((a
                                                  //| ,2)), List((a,3)), List((a,4)))
  List(1,3,5) == List(2,3,5)                      //> res2: Boolean = false
  List(1,3,5) == List(1,3,5)                      //> res3: Boolean = true
  List(Nil)                                       //> res4: List[scala.collection.immutable.Nil.type] = List(List())
                                                  
}