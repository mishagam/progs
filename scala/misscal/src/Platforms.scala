// CodeForces 18B

object Platforms extends App {
  val ln = (Console.readLine()).split(" ") map (_.toInt)
  val n = ln(0)
  val d = ln(1)
  val m = ln(2)
  val l = ln(3)
  
  var p = 0L
  var cont = true
  while(cont) {
    val nn = p / m
    val oo = p % m
    if (nn >= n || oo > l) {
      cont = false
    } else {
      if (oo + 3*d < l) {
        p += ((l - oo)/d)*d
      } else {
        p += d
      }
    }
  }
  println(p)
}

// 3 6 6 3                                                                                       