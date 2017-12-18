object IpSix extends App {
  val NBLOCK = 8
  val n = Console.readLine() toInt
  var dif0 = 0

  def fillZero(s: String) = "0000".substring(0, (4 - s.length)) + s

  def repl0(n: Int): String = n match {
    case 0 => "0000"
    case _ => "0000:" + repl0(n - 1)
  }

  def repl(s: String): String = s match {
    case "Z" => repl0(dif0)
    case _ => fillZero(s)
  }
  
  def work () = {
    val sou = Console.readLine.replace("::", ":Z:")
    val short = (sou.split(":"))
    dif0 = NBLOCK - short.length
    val full = (short map repl) toList
    val fulls = full mkString ":"
    println(fulls)
  }

  for (i <- 0 until n) {
    work()
  }
}