package misact;
/** look for leader. TODO */
import scala.actors.Actor
import scala.collection.mutable.HashMap

case object SendMaxVal
case object AnsMaxVal
case object NotifyLargest
case object AnswerLargest

class KnotL(val cur: Char, neibs: String, acttab: HashMap[Char, KnotL], value:Int) extends Actor {
  var notified: Boolean = false
  var sourceMaxVal: Char = '0'
  var sourceLargest: Char = '0'
  var expectedAnswers = 0
  var curMax = value

  /**
   * notifying 
   */
  def notifyMaxVal(sou: Char, v: Int) {
    if (v < curMax) {
      println("Too small value " + v + " replacing with " + curMax )
    } else {
      curMax = v
    }    
    expectedAnswers = (neibs.size) - (if (sou >= 'a') 1 else 0)
    notified = true
    sourceMaxVal = sou
    for (val kc <- neibs) {
      if (sou != kc) {
        println("Notifying " + kc + " from " + cur + " with value " + curMax)
        acttab(kc) ! (SendMaxVal, cur, curMax)
      }
    }
    ansMaxVal()
  }

  /**
   * answer to Max Val request
   */
  def ansMaxVal() {
    if (expectedAnswers == 0) {
      if (sourceMaxVal >= 'a') {
        // notify source
        val ksou = acttab(sourceMaxVal)
        ksou ! (AnsMaxVal, cur, curMax)
        println("Source " + sourceMaxVal + " AnsMaxVal from " + cur)
      } else {
        println("SearchMaxVal Done")
      }
    }
  }

  /**
   * distributing max value
   */
  def notifyLargest(sou: Char, v: Int) {
    if (curMax > v) {      
      println("*** Error, curMax = " + curMax + " > ve = " + v)
      return;
    }
    expectedAnswers = (neibs.size) - (if (sou >= 'a') 1 else 0)
    notified = true
    sourceLargest = sou
    for (val kc <- neibs) {
      if (sou != kc) {
        println("Notifying " + kc + " from " + cur)
        acttab(kc) ! (NotifyLargest, cur, v)
      }
    }
    ansLargest()
  }

  def ansLargest() {
    if (expectedAnswers == 0) {
      if (sourceLargest >= 'a') {
        // notify source
        val ksou = acttab(sourceLargest)
        ksou ! (AnswerLargest, cur, curMax)
        println("Source " + sourceLargest + " ack from " + cur)
      } else {
        println("Notification Done")
      }
    }
  }

  def act() {
    println("KnotL " + cur + " started")
    while (true) {
      receive {
        case (SendMaxVal, c: Char, v:Int) =>
          {
            println("Case notify from " + c + " to " + cur + " val " + v)
            if (v < curMax) {
              notifyMaxVal('0', curMax)
            } else if (v > curMax) {
              notifyMaxVal(c, v)
            } else if (v == curMax){
              acttab(c) ! (AnsMaxVal, cur, v)
            }
          }
        case (AnsMaxVal, c: Char, v:Int) =>
          {
            println("received answer from " + c + " to " + cur + " val " + v)
            expectedAnswers -= 1
            ansMaxVal()
          }
        case (NotifyLargest, c: Char, v:Int) =>
          {
            println("Case NotifyLargest from " + c + " to " + cur + " val " + v)
            if (!notified) {
              notifyLargest(c, curMax)
            } else {
              acttab(c) ! (AnswerLargest, curMax, v)
            }
          }
        case (AnswerLargest, c: Char, v:Int) =>
          {
            println("received answer from " + c + " to " + cur + " val " + v)
            expectedAnswers -= 1
            ansLargest()
          }
      }
    }
  }
}
object LeaderAct extends App {
  var knots = new HashMap[Char, KnotL]

  def addKnot(c: Char, s: String, v:Int) = {
    val k = new KnotL(c, s, knots, v)
    knots.put(c, k)
  }

  def addKnots() = {
    addKnot('a', "bcd", 7)
    addKnot('b', "acd", 6)
    addKnot('c', "abd", 4)
    addKnot('d', "abce", 2)
    addKnot('e', "d", 9)
    for { val c <- knots.keySet } {
      knots(c).start()
    }
    val ka = knots('a')
    Thread.sleep(20)
    ka.notifyMaxVal('0', 0)
  }
  addKnots()
  Thread.sleep(100)
}
