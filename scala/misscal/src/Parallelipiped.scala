// codeforces 224A done
object Parallelipiped extends App {
  val ss = (Console.readLine.split(" ")) map (_.toInt)
  val sxy = ss(0)
  val syz = ss(1)
  val sxz = ss(2)
  
  def lxyz():Int = {
    val vars = for {
      x <- 1 to 10000
      if sxy % x == 0
      val y = sxy / x
      if syz % y == 0
      val z = syz / y
      if x*z == sxz      
    } yield (x + y + z)
    vars(0) * 4
  }
  
  println(lxyz())
}