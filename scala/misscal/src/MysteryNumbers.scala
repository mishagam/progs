// cf 171A done

object MysteryNumbers extends App {
  val ln = (Console.readLine()).split(" ") map (_.toInt)
  val a = ln(0)
  val b = ln(1)
  
  def invert(n:Int, acc:Int):Int = n match {
    case 0 => acc
    case _ => invert(n/10, acc*10 + (n%10))
  }
  
  val bb = invert(b,0)
  println(a + bb)
}