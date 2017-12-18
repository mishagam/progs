// codeforces 224C ToDo
object Skobki extends App {
  val ss = Console.readLine()
  var skobs: Map[Int, Formula] = Map()
  var stack: List[(Int, Char)] = List()
  
  class Formula(val beg:Int, val end:Int, val cnt:Int) {
    def join(b:Formula):Formula = 
      if (b.beg == end+1) new Formula(beg, b.end, cnt + b.cnt)
      else throw new Error("b not near in join")    
  }
  
  def combineFormulas() = {
    // XXX val bf =  //
  }
  
  def checkMax(b:Int, e:Int) {
    var cnt = 0
    for {
      i <- b until e
      if ss.charAt(i) == '['
    } cnt = cnt+1
    skobs = skobs ++ Map(b -> new Formula(b,e,cnt))
  }
  
  def scan(s:String) = {
    for (p <- Range(0, s.length)) {
      val c = s.charAt(p)
      if (c=='[' || c=='(') {
        stack = (p,c) :: stack
      } else if (stack.isEmpty) {
        // do nothing
      } else {
        if ((c==')' && stack.head._2 == '(') || 
            (c==']' && stack.head._2 == '['))  {
          checkMax(stack.head._1, p+1)
          stack = stack.tail
        } else {
          stack = List()
        }
      }
    }
  }
  
  scan(ss)
}