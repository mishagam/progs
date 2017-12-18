package misact;
/** notify all actors about something, apparently works */
import scala.actors.Actor
import scala.collection.mutable.HashMap

case object Notify
case object AnswerOk

class Knot(val cur: Char, neibs: String, acttab: HashMap[Char, Knot]) extends Actor {
  var neib: List[Knot] = List()
  var notified: Boolean = false
  var source: Char = '0'
  var expectedAnswers = 0

  def initNeib() {
    neib = neibs.toList.map((c: Char) => acttab(c))
    println("inited neighbours " + neibs + " for " + cur)
  }
  def notify(sou: Char) {
    expectedAnswers = (neib.size) - (if (sou >= 'a') 1 else 0)
    // println("Received notify from " + sou + " to " + cur)
    notified = true
    source = sou
    for (val k <- neib) {
      if (sou != k.cur) {
        println("Notifying " + k.cur + " from " + cur)
        k ! (Notify, cur)
      }
    }
    ackSource()
  }

  def ackSource() {
    if (expectedAnswers == 0) {
      if (source >= 'a') {
        // notify source
        val ksou = acttab(source)
        ksou ! (AnswerOk, cur)
        println("Source " + source + " ack from " + cur)
      } else {
        println("Notification Done")
      }
    }
  }

  def act() {
    println("Knot " + cur + " started")
    while (true) {
      receive {
        case (Notify, c: Char) =>
          {
            println("Case notify from " + c + " to " + cur)
            if (!notified) {
              notify(c)
            } else {
              acttab(c) ! (AnswerOk, cur)
            }
          }
        case (AnswerOk, c: Char) =>
          {
            println("received answer from " + c + " to " + cur)
            expectedAnswers -= 1
            ackSource()
          }
      }
    }
  }
}
object NotifyAct extends App {
  var knots = new HashMap[Char, Knot]

  def addKnot(c: Char, s: String) = {
    val k = new Knot(c, s, knots)
    knots.put(c, k)
  }

  def addKnots() = {
    addKnot('a', "bcd")
    addKnot('b', "acd")
    addKnot('c', "abd")
    addKnot('d', "abce")
    addKnot('e', "d")
    for { val c <- knots.keySet } {
      knots(c).initNeib
      knots(c).start()
    }
    val ka = knots('a')
    Thread.sleep(20)
    ka.notify('0')
  }

  addKnots()
  Thread.sleep(100)

}
