package rational

object ratws {
  val x = new Rational(1,3)                       //> x  : rational.Rational = 1/3
  val y = new Rational(5,7)                       //> y  : rational.Rational = 5/7
  val z = new Rational(3,2)                       //> z  : rational.Rational = 3/2
  z.numer                                         //> res0: Int = 3
  z.denom                                         //> res1: Int = 2
  
  x.sub(y).sub(z)                                 //> res2: rational.Rational = -79/42
}