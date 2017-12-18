// codeforces problem 55 B Sma

object SmallNums extends App {

  def readNums(): List[Long] = {
    val line = Console.readLine()
    val ss = line.split(" ")
    val ls: List[String] = ss toList;
    ls map (s => s.toLong)
  }

  def str2op(s: String): Op = s match {
    case "+" => new Add
    case "*" => new Mul
    case _ => throw new Error("Illegal operation " + s)
  }

  def readOps(): List[Op] = {
    val ss = Console.readLine().split(" ")
    val ls: List[String] = ss toList;
    ls map str2op
  }

  def allPairs(n: Int): List[(Int, Int)] = {
    val sq = for {
      i <- Range(1, n)
      j <- Range(0, i)
    } yield (j, i)
    sq toList
  }

  def removeA[T](l: List[T], a: Int): List[T] =
    (l take a) ::: (l drop (a + 1))

  def removeAB[T](l: List[T], a: Int, b: Int): List[T] =
    removeA(removeA(l, a), (b - 1))

  def minNum(nms: List[Long], ops: List[Op], pairs: List[(Int, Int)], mmin: Long): Long = pairs match {
    case Nil => mmin
    case (a, b) :: tl => {
      val r = ops.head.apply(nms(a), nms(b))
      val n1 = (nms length) - 1
      if (n1 == 1) {
        r
      } else {
        val mn = minNum(r :: removeAB(nms, a, b), ops.tail, allPairs(n1), Long.MaxValue)
        val min1 = if (mn < mmin) mn else mmin
        minNum(nms, ops, tl, min1)
      }
    }
  }

  val nums = readNums()
  val ops = readOps
  val n = 4
  val minv = minNum(nums, ops, allPairs(n), Long.MaxValue)
  Console.println(minv)
}

abstract class Op {
  def apply(a: Long, b: Long): Long
}
case class Add extends Op {
  def apply(a: Long, b: Long) = a + b
}
case class Mul extends Op {
  def apply(a: Long, b: Long) = a * b
}