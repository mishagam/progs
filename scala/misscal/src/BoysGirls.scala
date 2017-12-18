// CodeForces 253A done
import scala.io.Source
import java.io.PrintWriter
import java.io.File

object BoysGirls extends App {
    val it = Source.fromFile("input.txt").getLines
    val writer = new PrintWriter(new File("output.txt" ))
    val ss = it.next.split(" ")
    val iss = ss.map(_.toInt)
    val nb = iss(0)
    val ng = iss(1)
    
    def printc(s:String, n:Int) = 
      for (i <- 0 until n) {
        writer.print(s)        
      }
    
    // println("nb,ng = " + nb + " " + ng)
    if (nb == ng) printc("GB", ng)
	else if (nb > ng) {
		printc( "BG", ng);
		printc( "B", (nb-ng))
	} else {
		printc( "GB", nb)
		printc( "G", (ng-nb) )
	}
    writer.close()
}

// copy input.txt
// 3 5