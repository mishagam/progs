// CodeForces 223C done
object PartSums extends App {
  val MOD: Long = 1000000007L
  var kkf:Vector[Long] = Vector()
  
  def mull(a:Long, b:Long):Long = (a * b) % MOD
  def addl(a:Long, b:Long):Long = (a + b) % MOD
  def divl(a:Long, n:Int):Long = {
    val lst = for {
      i <- Range(0, n)
      if (a+i*MOD) % n == 0
    } yield ((a+i*MOD) / n)
    lst(0)
  }
  
  def koefs(n:Int, k:Int): Vector[Long] = {
    var vc = Vector[Long]()
    var cf:Long = 1
    for (i <- 0 until n) {
      vc = vc :+ cf
      cf = mull(cf, (k+i))
      cf = divl(cf, i+1)
    }
    vc
  }
  
  def sum(n:Int,  aa:Vector[Long]):Long = {
    var sm:Long = 0
    val kfs = kkf;  // koefs(n+1, k)
    for (i <- 0 to n) {
      sm = addl(sm, mull(aa(i), kfs(n-i))) 
    }
    sm
  }

  def work() = {
	  var ss = (Console.readLine.split(" ")) map (_.toInt)
	  val n = ss(0)
	  val k = ss(1)
	  val aa = (Console.readLine.split(" ") map (_.toLong)) toList;
	  var vaa:Vector[Long] = Vector()	  
	  vaa = vaa ++ aa
	  kkf = koefs(n+5, k)
	  val smaa = for (i <- 0 until n) 
	    yield sum(i, vaa)
	    
	  println( smaa mkString " " ) 
  }
  def printSums(kk:Int) = {
      kkf = koefs(20, kk) 
	  print("kk = " + kk + " sums: ")
	  for (i <- Range(0,5)) 
	    print(" " + sum(i, Vector(1,2,4,8, 10)))
	  println()
  }
  def testPrint() = {
	  println("MOD = " + MOD)
	  println("mul29 = " + mull(2,9))
	  println("add29 = " + addl(1000000000L,14))
	  println("divl = " + divl(1000000000L, 1000))
	  println(koefs(4,4))  // expect 1, 4
	  println(koefs(10,3))  // expect 1, 4
	  println(koefs(0,4))  // expect 1, 4
	  kkf = koefs(20,4)
	  printSums(0)
	  printSums(1)
	  printSums(100000)   
  }
  // testPrint()
  work()
}