// CodeForces 237C ToDo

object ProstOtr extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val a = ss(0)
  val b = ss(1)
  val k = ss(2)
  var prime:Array[Boolean] = Array.fill(b)(true)
  
  def fillPrime(bb:Int):Unit = {
    for {
      i <- 2 to bb
      if prime(i)
    } {
      for (ij <- i+i to bb by i) {
        prime(i) = false
      }      
    } 
  }
  
  def maxLen() : Int = {
    var f = a
    var l = a
    var maxl = 0
    var np = 0
    
    while (np < k && l < b) {
      if (prime(l)) {
        np = np+1;
      }
      l = l + 1
    }
    if (np < k) -1
    else {
      maxl = l - f    
      while (l < b) {
        if (prime(f)) {
          np = np-1;
        }
        f = f+1   
	    while (np < k && l < b) {
	      if (prime(l)) {
	        np = np+1;
	      }
	      l = l + 1
	    }
        if (l-f > maxl) {
          maxl = l-f
        }
      }
      maxl
    }
  }
    
  fillPrime(b)
  val ln = maxLen()
  println(ln)
}