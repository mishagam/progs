package rational

class Rational(x:Int, y:Int) {
    def numer = x
	def denom = y
	
	def add(b:Rational) =
		new Rational(numer * b.denom + denom * b.numer, denom * b.denom)
	
	def neg() =
		new Rational(-numer, denom)
		
	def sub(b:Rational) = add(b.neg())

	override def toString() = numer + "/" + denom
}