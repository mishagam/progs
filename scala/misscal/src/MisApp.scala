import scala.actors._

object SeriousActor extends Actor {
  def act() {
    for (i <- 1 to 5) {
      println("To be or not to be.")
      SillyActor ! "pshol von"
      Thread.sleep(1000)
    }
  }
}

object SillyActor extends Actor {
  def act() {
    for (i <- 1 to 5) {
      receive {
        case s: String => println("My Answer on: " + s)
      }
    }
  }
}

object MisApp extends App {
  println("Hello from Miss 3")
  SeriousActor.start()
  SillyActor.start()  
}

