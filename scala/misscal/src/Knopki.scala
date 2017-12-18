object Knopki extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val nn = ss(0)
  
  def nknl(n:Int):(Int, Int) = n match {
    case 1 => (1,1)
    case _ => {
      val (k,l) = nknl(n-1)
      val nl = l + (n-1)
      val nk = nl + k
      (nk, nl)
    }
  } 
    
  val (kk, ll) = nknl(nn)
  println(kk)

}