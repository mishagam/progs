// codeforces problem 237A

object Kassa extends App {
  
  def readMinutes(n:Int) : List[Int] = {
    def readLines(n:Int) : List[String] = n match {
      case 0 => List()
      case _ => Console.readLine() :: readLines(n-1)
    }
    
    def strToMinutes(s:String) : Int = {
      val shm = s.split(" ")
      val hr = shm(0) toInt;
      val mn = shm(1) toInt;
      hr * 60 + mn
    }
    
    val lines = readLines(n)
    val minutes = lines map strToMinutes
    minutes
  }
  
  def maxSeq(l:List[Int], lastMn:Int, lastRep:Int, maxRep:Int) : (Int, Int, Int) = l match {
    case List() => (lastMn, lastRep, maxRep)
    case hd :: tl => {
      val lr = if (hd == lastMn) lastRep+1 else 1
      val mxr = if (lr > maxRep) lr else maxRep
      maxSeq(tl, hd, lr, mxr)
    }
  }
  
  val n = Console.readInt()
  val minutes = readMinutes(n)
  val smin = minutes sorted;
  val (mxMin, lr, maxr) = maxSeq(smin, -1, 0, 0)
  Console.println(maxr)
}