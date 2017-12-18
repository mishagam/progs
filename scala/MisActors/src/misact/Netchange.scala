package misact

import java.util.Arrays
import scala.actors.Actor
import scala.actors.Actor._
import scala.collection.mutable.HashSet
import scala.collection.mutable.HashMap

case class Msg(val from:Int, val tou:Int, val msg:String) 
case class YourSon(val ys:Boolean, val w:Int)
case class Tabl(val w:Int, tab:Array[Int])

/**
 * Tueg Algorithm, book p 128
 * for now assume distances == 1
 */

class Uzel(val u:Int, val Nbii:Set[Int]) extends Actor {
  val N = 10
  lazy val neigh:Set[Uzel] = Nbii map (Netchange.toNode(_))  
  var Nb:Array[Option[Uzel]] = new Array(N)
  val D:Array[Int] = new Array(N)
  val S:HashSet[Int] = new HashSet()
  val ysm:HashMap[Int, Boolean] = new HashMap()
  
  def initTab() = {
    for (v <- 0 to N) {
      if (v == u) {
        D(v) = 0
        Nb(v) = None
      } else if (Nbii.contains(v)){
        D(v) = 1
        Nb(v) = Some(Netchange.toNode(v))
      } else {
        D(v) = Int.MaxValue
        Nb(v) = None
      }
    }
  }
  
  def doW(w:Int) = {
    if (S.contains(w)) {
      println("Uzel "+u+" S already contains " + w)
    } else {
      // sending ys messages
      for (x <- neigh) {
        if (Nb(w) == x) {
          x ! YourSon(true, w)
        } else {
          x ! YourSon(false, w)
        }
      }
      println("Use "+u+" send YS messages")
      // receiving ys messages
      var recu = 0
      while (recu < Nbii.size) {
        receive {
          case YourSon(ys, x) => {
            ysm(x) = ys
            recu += 1
          }
        }
      }
      println("Use "+u+" received "+Nbii.size+" YS messages, w=" + w)
      // updateing D
      if (D(w) < Int.MaxValue) {
        if (u != w) {
          
        }
      }
    }
  }
  
  def act() {
    
  }
  
  
  
  
  
   
  def printMsg(m:Msg) = {
      println("Uzel " + u + " received msg: " + m.msg)
  }
  
  def sendMess(m:Msg) = {
    if (m.tou == u) {
      printMsg(m)
    } else {
      Nb(m.tou).get ! m
    }
  }
}

object Netchange extends App {
  val nodesl:List[Uzel] = List(
      new Uzel(0, Set(1,6)),
      new Uzel(1, Set(0,2)),
      new Uzel(2, Set(1,3,7)),
      new Uzel(3, Set(2,4,5,7)),
      new Uzel(4, Set(3)),
      new Uzel(5, Set(3)),
      new Uzel(6, Set(0,7)),
      new Uzel(7, Set(2,3,6,8)),
      new Uzel(8, Set(7,9,10)),
      new Uzel(9, Set(8)),
      new Uzel(10, Set(8))
      )
  val nodesa:Array[Uzel] = nodesl.toArray[Uzel]
  
  def toNode(i:Int) = nodesa(i)
}