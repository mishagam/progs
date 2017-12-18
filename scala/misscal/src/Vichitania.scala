// codeforces 267A
object Vichitania extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val n = ss(0)

  def countVich(a: Int, b: Int): Int =
    if (a < b) countVich(b, a)
    else if (b == 0) 0
    else {
      val d = a / b
      val o = a % b
      d + countVich(b, o)
    }

  for (i <- 0 until n) {
    ss = (Console.readLine.split(" ")) map (_.toInt)
    val a = ss(0)
    val b = ss(1)
    val cnt = countVich(a, b)
    println(cnt)
  }
}