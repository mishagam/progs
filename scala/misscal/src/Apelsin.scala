// codeforces 244 A (competition)

object Apelsin extends App {
    var ss = (Console.readLine.split(" ")) map (_.toInt)
    val (n,k) = (ss(0), ss(1))
    val aa0 = (Console.readLine.split(" ")) map (_.toInt)
    val aa = aa0 map (x => x-1)
    val nk = n*k
    var dl = Array.fill(nk)(0)
    
    def iniFill() = {
      for {
        i <- Range(0, k)
        j <- Range(0, n)
        val idx = n*i+j
      } dl(idx) = i
    }
    
    def printOneDol(i:Int) = {
      for {
        j <- Range(0, nk)
        if dl(j) == i
      } print((j+1) + " ")
      println
    }
    
    def printDl = {
      for {
        i <- Range(0, k)
      } printOneDol(i)
    }
    
    def findI(i:Int):Int = {
      val seq = for {
        ii <- Range(0, nk)
        if dl(ii) == i
      } yield ii
      seq(0)
    }
    
    def fixOne(i:Int, ai:Int) = {
      val idx = findI(i)
      if (ai != idx) {
        dl(idx) = dl(ai)
        dl(ai) = i
      }
    }
    
    def fixAll = {
      for {
        i<- Range(0, k)
      } fixOne(i, aa(i))
    }
    
    iniFill()
    fixAll
    printDl
}