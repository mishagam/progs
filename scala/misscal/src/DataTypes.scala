// CodeForces 108 B Data Types. Done

object DataTypes extends App {
  val ln0 = (Console.readLine()).split(" ") map (_.toInt)
  val n = ln0(0)
  val a = (Console.readLine()).split(" ") map (_.toInt)
  val sa = a.sortWith(_ < _)
  
  var leave = false
  for (i <- 0 until (n-1)) {
    val a = sa(i)
    val b = sa(i+1)
    if (a>1 && a != b && b<2*a) {
      leave = true
    }
  }
  println( if (leave) "YES" else "NO" )
}