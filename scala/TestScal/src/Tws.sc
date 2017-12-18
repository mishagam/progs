object Tws {
  println("Welcome to the Scala worksheet")       //> Welcome to the Scala worksheet
  val v2 = 2 + 2                                  //> v2  : Int = 4
  
  def fact(i:Long):Long = i match {
  case 0 => 1
  case 1 => 1
  case _ => i * fact(i-1)
  }                                               //> fact: (i: Long)Long
  fact(20)                                        //> res0: Long = 2432902008176640000
  
  3 + 3                                           //> res1: Int(6) = 6
}