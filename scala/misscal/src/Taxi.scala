// CodeForces 158 B done

object Taxi extends App {
  val ln0 = (Console.readLine()).split(" ") map (_.toInt)
  val n = ln0(0)
  val s = (Console.readLine()).split(" ") map (_.toInt)
  var nga:Array[Int] = Array.fill(5)(0)  // numbers of Taxi with given number of 
  
  def countgroups():Unit = {
    for (val i <- 0 until n) {
      nga(s(i)) = nga(s(i)) + 1
    }
  }
  
  countgroups()
  var nt = nga(4)
  nt = nt + nga(3)
  if (nga(1) > nga(3)) {
    nga(1) = nga(1) - nga(3)
  } else {
    nga(1) = 0
  }
  val n1 = nga(1) + 2*nga(2)
  val n4 = n1/4 
  nt = nt + n4
  if (n1 > n4*4) {
    nt = nt+1
  } 
  println(nt)
}