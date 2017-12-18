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
  
  def maxSame(lm:List[Int]):Int = lm match {
    val lp = lm map (m => (m,1))
    
  }
  
  val n = Console.readInt()
  val minutes = readMinutes(n)
  val smin = minutes sorted;
  val su = Set(smin)
  Console.println(su size)
}