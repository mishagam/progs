// CodeForces 245 C

object IgraMonet extends App {
  val n = Console.readInt
  val s = Console.readLine
  val a:Array[Int] = (s split " ") map (_.toInt)
  // println("n=" + n +"s:" + s + "a:" + a)
  
  def countMoves(lst:Int, cnt:Int):Int = 
    if (lst < 3) cnt + math.max(a(0), 0)
    else {
      val ad = math.max(0, math.max(a(lst-1), a(lst-2)))
      a(lst-1) -= ad
      a(lst - 2) -= ad
      a((lst-3)/2) -= ad
      countMoves(lst-2, cnt+ad)
    } 
  
  if (n < 3 || (n % 2 == 0))    println(-1)
  else println(countMoves(n, 0))
}