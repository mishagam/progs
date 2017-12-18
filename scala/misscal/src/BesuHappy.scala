// codeforces 244 C (runs too long)
import java.util.HashSet
import collection.JavaConversions._

object BesuHappy extends App {
  var ss = (Console.readLine.split(" ")) map (_.toInt)
  val n = ss(0)
  val a = (Console.readLine.split(" ")) map (_.toInt)
  var allset: java.util.HashSet[Int] = new HashSet[Int]()

  def addOne(a: Int, sa: Set[Int]): Set[Int] = {
    val sa1 = sa + 0
    val saa = sa1 map (_ | a)
    saa
  }

  def addAllSets(i: Int, slast: Set[Int]): Unit =
    if (i == n) ()
    else {
      val snewLast = addOne(a(i), slast)
      val juSet: java.util.Collection[Int] = snewLast
      allset.addAll(juSet)
      addAllSets(i + 1, snewLast)
    }

  val s = addAllSets(0, Set())
  println(allset.size)
  println(allset)    
}

