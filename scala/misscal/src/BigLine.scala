// CodeForces 242B done

object BigLine extends App {
  val n = Console.readInt
  val seqpr: Seq[(Int, Int)] = for {
    i <- Range(0, n)
    val ln = (Console.readLine()).split(" ") map (_.toInt)
  } yield (ln(0), ln(1))
  val lpr = seqpr toList
  
  def maxPr(lpr: List[(Int, Int)], idx:Int, maxP:(Int, Int, Int)):(Int, Int, Int) = lpr match {
    case Nil => maxP
    case (a,b) :: tl => {
      val (ma, mb, ii) = maxP
      if (a<=ma && mb<=b) maxPr(tl, idx+1, (a,b, idx))
      else if (ma<=a && b<=mb) maxPr(tl, idx+1, (ma, mb, ii))
      else maxPr(tl, idx+1, (Math.min(a,ma), Math.max(b, mb), -1))
    } 
  }
  
  val (a,b,idx) = maxPr(lpr.tail, 2, (lpr.head._1, lpr.head._2, 1))
  println(idx)
}