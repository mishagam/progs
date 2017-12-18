// CodeForces 242C

object PutKorolia extends App {
    var ss = (Console.readLine.split(" ")) map (_.toInt)
    val (x0,y0,x1,y1) = (ss(0), ss(1), ss(2), ss(3))
    ss = (Console.readLine.split(" ")) map (_.toInt)
    val n = ss(0)
    // we use only array around y0
    val X0 = n+1;
    var aa:Array[List[(Int,Int)]] = Array.fill(2*n+2)(List())
    for {
      i <- Range(0, n)
      ss = (Console.readLine.split(" ")) map (_.toInt)
      val (r,a,b) = (ss(0), ss(1), ss(2))
      if -X0 <= r && r <= X0
    } aa(X0+r) = (a,b) :: aa(X0 + r)


}