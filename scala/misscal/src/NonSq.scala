// codeforces 233B done
object NonSq extends App {
  val n = Console.readLong
  val top:Long = (math.sqrt(n) toLong) + 1
  def sumDigits(n:Long, summ:Int):Int = n match {
    case 0 => summ
    case _ => sumDigits(n/10, summ + ((n % 10) toInt))    
  }
  
  def checkX(i:Int):Boolean = {
    val x = (top - i) toLong;
    val x1 = x + sumDigits(x, 0)
    x*x1 == n 
  }
  
  val xseq = for {
    i <- Range(1,100)
    if (checkX(i))
  } yield i
  Console.println(if ((xseq length) == 0) -1 else top - xseq(0))

}