object Matchi extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val n = ss(0)
  
  def readMatches(nn:Int):List[(Int,Int)] = 
    if (nn == 0) List()
    else {
        val sss = (Console.readLine.split(" ")) map (_.toInt)
        (sss(0), sss(1)) :: readMatches(nn-1)
    }
  
  
  def cntMatch(pl:List[(Int,Int)], ac:Int, bc:Int):Int =
  	pl match {
  	case Nil => 0
  	case (a,b) :: tl => ((if (b==ac) 1 else 0) +
  		(if (a==bc) 1 else 0) +
  		cntMatch(tl, ac,bc))
  	}                                         //> cntMatch: (pl: List[(Int, Int)], ac: Int, bc: Int)Int
  	
  def cntSame(pl:List[(Int,Int)]):Int =
  	pl match {
  	case Nil => 0
  	case (a,b) :: tl => cntMatch(tl, a,b) + cntSame(tl)
  	}   
  
  val pl = readMatches(n)
  println(cntSame(pl))
}