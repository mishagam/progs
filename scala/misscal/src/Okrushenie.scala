// codeforces 190B

object Okrushenie extends App {
  val t1 = (Console.readLine.split(" ")) map (_.toInt)
  val t2 = (Console.readLine.split(" ")) map (_.toInt)
  val (x0, y0, r0) = (t1(0), t1(1), t1(2))
  val (x1, y1, r1) = (t2(0), t2(1), t2(2))
  val dx = (x0.toDouble - x1.toDouble)
  val dy = (y0.toDouble - y1.toDouble)
  val d = Math.sqrt(dx*dx + dy*dy)
  if (d > r0+r1) println((d-r0-r1)/2)
  else {
    val rmx = Math.max(r0,r1)
    val rmn = Math.min(r0,r1)
    if (rmn + d >= rmx) println(0)
    else println((rmx - d - rmn) / 2)
  }
}