object ScalTestWs {
  println("Welcome to the Scala worksheet")       //> Welcome to the Scala worksheet
  2*2                                             //> res0: Int(4) = 4
  val n = 5                                       //> n  : Int = 5
  var al:List[(Int,Int)] = List((0,1), (0,2), (0,3), (0,4), (1,1))
                                                  //> al  : List[(Int, Int)] = List((0,1), (0,2), (0,3), (0,4), (1,1))
  
  def playCompare(a:(Int,Int), b:(Int,Int)) = (a,b) match {
    case ((al,ap), (bl,bp)) =>
      if (ap != bp) bp > ap  // worse plays first
      else al > bl // longer plays first
  }                                               //> playCompare: (a: (Int, Int), b: (Int, Int))Boolean
  
  val plays = al.sortWith(playCompare)            //> plays  : List[(Int, Int)] = List((1,1), (0,1), (0,2), (0,3), (0,4))
  
  val rp = plays.reverse                          //> rp  : List[(Int, Int)] = List((0,4), (0,3), (0,2), (0,1), (1,1))
}