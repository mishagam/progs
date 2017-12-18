// codeforces 244D competition


object Hydra extends App {
    var ss = (Console.readLine().split(" ")) map (_.toInt)
    val (n,m,h,t) = (ss(0),ss(1),ss(2),ss(3))    
    println("(n,m,h,t) = " + n + " " + m + " " + h + " " + t)
    var as:Array[Set[Int]] = Array.fill(n)(Set())
    var ais:Array[Int] = Array.fill(n)(0)

    def readGrid():List[String] = {
    		println("reading sab")
    		val sab = for {
    			i <- Range(0, m)
    		} yield Console.readLine()
    		println("sab read OK")
    		sab toList
    }    
    
    def sToPair(s:String): (Int, Int) = {
      val l = s.split(" ") map (_.toInt)
      (l(0), l(1))
    }
    val ssab = readGrid()
    val ab = ssab map sToPair
    
    def fillSets = {
      println("fillSets started")
      for {
        p <- ab
        val (a,b) = p
      } {
        as(a-1) = as(a-1) + (b-1)
        as(b-1) = as(b-1) + (a-1)
      }
      for {
        i <- Range(0, n)
      } ais(i) = i
      ais sortWith ((a,b) => as(a).size < as(b).size)
      println("fillSets done")
    }
    
    fillSets
    println(ais)
    for {
      i <- Range(0, n)
    } println(ais(i))

}
class ASet(val i:Int, val s:Set[Int]) {}