package misact

import scala.actors.Actor
import scala.actors.Actor._

case object Ping
case object Pong
case object Stop

class Ping(count: Int, pong: Actor) extends Actor {
  def act() {
    var left = count - 1
    println("Sending first Ping")
    pong ! Ping
    println("first Ping send")
    while (true) {
      receive {
        case Pong =>
          if (left > 0) {
            println("Ping Ping cnt = " + left)
            pong ! Ping
            left -= 1
          } else {
            pong ! Stop
            println("Ping finished")
            exit()
          }
      }
    }
  }
}

class Pong extends Actor {
  def act() {
    loop {
      react {
        case Ping =>
          println("Pong Pong")
          sender ! Pong
        case Stop =>
          println("Pong Stop")
          exit()
      }
    }
  }
}

object PingPong extends App {
  val pong = new Pong
  val ping = new Ping(40, pong)
  ping.start
  pong.start
}