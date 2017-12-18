// CodeForces 234 C

object Pogoda extends App {
  var s = Console.readLine()
  var ss = (s.split(" ")) map (_.toInt)
  val n = ss(0)
  s = Console.readLine()
  ss = (s.split(" ")) map (_.toInt)
  val t = ss map (_.toInt)
  var nn: Array[Int] = Array.fill(n)(0)
  var np: Array[Int] = Array.fill(n)(0)

  def countNeg(i: Int, cntNeg: Int): Unit = {
    if (i == n) ()
    else {
      val cn = if (t(i) >= 0) cntNeg + 1 else cntNeg
      nn(i) = cn
      countNeg(i + 1, cn)
    }
  }

  def countPos(i: Int, cntPos: Int): Unit =
    if (i < 0) ()
    else {
      val cpU = if (t(i) <= 0) cntPos + 1 else cntPos
      np(i) = cpU
      countPos(i - 1, cpU)
    }

  def findOpt(i: Int, lastOpt: Int): Int =
    if (i == n-1) lastOpt
    else {
      val o = nn(i) + np(i+1)
      findOpt(i + 1, if (o < lastOpt) o else lastOpt)
    }

  countNeg(0, 0)
  countPos(n - 1, 0)
  val oo = findOpt(0, 1000000000)
  println(oo)
}