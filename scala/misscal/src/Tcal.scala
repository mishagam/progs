import javapart.MisJav;
object Tcal extends App {
  def mis33(): Int = 33

  def sums(n: Long): Long = {
    def sumstl(n: Long, sm: Long): Long =
      if (n == 0) sm
      else sumstl(n - 1, n + sm)
    sumstl(n, 0)
  }

  def sumntl(n: Long): Long =
    if (n == 0) 0
    else n + sumntl(n - 1)

  println("Mis main started")
  val sm = sums(500000000)
  println("sm = " + sm)
  val sm1 = sumntl(3000) // 8000 failed, 5000 worked
  println("sm1 = " + sm1)
  val m = new MisJav()
  println("mj(5) = " + m.mj(5))
  println("ms(5a5) = " + m.ms("5a5"))
}