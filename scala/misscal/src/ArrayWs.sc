object ArrayWs {
  var ar = Array.fill(10)(15)                     //> ar  : Array[Int] = Array(15, 15, 15, 15, 15, 15, 15, 15, 15, 15)
    var aa:Array[List[(Int,Int)]] = Array.fill(21)(List())
                                                  //> aa  : Array[List[(Int, Int)]] = Array(List(), List(), List(), List(), List()
                                                  //| , List(), List(), List(), List(), List(), List(), List(), List(), List(), Li
                                                  //| st(), List(), List(), List(), List(), List(), List())
   val l = List(1,2)                              //> l  : List[Int] = List(1, 2)
   val x = l(0)                                   //> x  : Int = 1
   val y = l(1)                                   //> y  : Int = 2
  
}