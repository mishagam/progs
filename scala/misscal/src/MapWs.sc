object MapWs {
  val m = Map[String, Int]()                      //> m  : scala.collection.immutable.Map[String,Int] = Map()
  val ma = m ++ Map("aaa" -> 1)                   //> ma  : scala.collection.immutable.Map[String,Int] = Map(aaa -> 1)
  ma ++ Map("bb" -> 44, "aaa" -> 2)               //> res0: scala.collection.immutable.Map[String,Int] = Map(aaa -> 2, bb -> 44)
  val mp = Map[(Int,Int), Int]((1,2)->3, (1,3)->4)//> mp  : scala.collection.immutable.Map[(Int, Int),Int] = Map((1,2) -> 3, (1,3)
                                                  //|  -> 4)
  mp((1,3))                                       //> res1: Int = 4
  for {
  	pr <- mp.keys
  	v <- mp get pr
  } yield(v)                                      //> res2: Iterable[Int] = Set(3, 4)
  (11 -> 12)                                      //> res3: (Int, Int) = (11,12)
  // Map(List((1->3),(2->4)))
  val la = List("a"-> 1, "22"-> 22, "33"-> 33)    //> la  : List[(java.lang.String, Int)] = List((a,1), (22,22), (33,33))
  la toMap                                        //> res4: scala.collection.immutable.Map[java.lang.String,Int] = Map(a -> 1, 22 
                                                  //| -> 22, 33 -> 33)
  
  val lh = List(1,4,5,6)                          //> lh  : List[Int] = List(1, 4, 5, 6)
  (lh reverse) mkString "::"                      //> res5: String = 6::5::4::1
}