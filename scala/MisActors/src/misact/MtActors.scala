package misact

import scala.actors.Actor

class Redford extends Actor {
  def act() {
    println("A lot of what acting is, is paying attention.")
    receive {
      case (s:String, sender:Actor) => 
        println ("received message:" + s)
        sender ! "Send answer from Redford"
    }
  }
}
class Door(next:Actor) extends Actor {
  def act() {
    println("Door fraze.")
    next ! ("sended message to next", this) 
    receive {
      case (s:String) => println("Door received message " + s)
    }
  }
}

object Tapp extends App {
  println("hello from Misha scala app")
  val robert = new Redford
  robert.start
  val door = new Door(robert)
  door.start
  Thread. sleep(10)
}
