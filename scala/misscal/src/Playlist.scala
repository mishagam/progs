object Playlist extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val n = ss(0)

  def readPlays(nn: Int): List[(Int, Int)] =
    if (nn == 0) List()
    else {
      val sss = (Console.readLine.split(" ")) map (_.toInt)
      (sss(0), sss(1)) :: readPlays(nn - 1)
    }
  
  def printPlays(pl:List[(Int,Int)]):Unit = pl match {
    case Nil => ()
    case (l,p) :: tl => {
      println(l + " " + p)
      printPlays(tl)
    }    
  }

  def playCompare(a: (Int, Int), b: (Int, Int)) = (a, b) match {
    case ((al, ap), (bl, bp)) => {
      if (ap != bp) ap < bp // worse plays last
      else al < bl // longer plays first
    }
  }

  val plays = readPlays(n)
  // println("readPlays passed")
  val sp = plays.sortWith(playCompare).reverse
  // printPlays(sp)

  def countEgoodEplay(pll: List[(Int, Int)], acc: (Double, Double)): (Double, Double) =
    pll match {
      case Nil => acc
      case (len, prob) :: tl => {
        val (egood, eplay) = acc
        val eg = egood + (0.01*prob)*len
        val epl = eplay + len + (1-0.01*prob)*egood
        countEgoodEplay(tl, (eg,epl))
      }
    }
  val (eg, elen) = countEgoodEplay(sp, (0,0))
  println(elen)
}