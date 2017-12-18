// Code Forces 241D done ??? (couldnt send)
import scala.collection.mutable.Map
object Numbers extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val n = ss(0)
  val p = ss(1)
  ss = (Console.readLine.split(" ")) map (_.toInt)
  val aa = ss
  var state:Map[(Int,Int), List[Int]] = scala.collection.mutable.Map((0,0) -> List())
  
  def remainder(a: Int, nxt: Int): Int = 
    ((a + "" + nxt) toInt) % p
  
  /** converting set of remainder, XOR */
  def addNum(nm:Int) = {
    val applied:Iterable[((Int,Int), List[Int])] = for {
      pr <- state.keys
    } yield ((remainder(pr._1, nm), pr._2 ^ nm) , nm :: state(pr));
    for {
      prh <- applied
    } if (!state.contains(prh._1) ||state(prh._1).length == 0) {
      state(prh._1) = prh._2
    }
  }
  
  def correct = (0,0)
  
  for (num <- aa)
    addNum(num);
  val hh = state(correct);
  if (hh.size > 0) {
    println("Yes")
    println((hh reverse) mkString " ")
  } else {
    println("No")
  }
}