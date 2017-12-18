// codeforces 236A

object DevYun extends App {
  val nm = Console.readLine()
  val sch: Set[Char] = nm toSet
  val devush = (sch.size % 2) == 0
  val answer = if (devush) "CHAT WITH HER!" else "IGNORE HIM!"
  println(answer)
}