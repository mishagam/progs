object ArrayNonEmptyWs {import scala.runtime.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(71); 
 	val a: Array[NonEmpty] = Array(new NonEmpty);System.out.println("""a  : Array[NonEmpty] = """ + $show(a ));$skip(27); 
 	val b: Array[IntSet] = a;System.out.println("""b  : Array[IntSet] = """ + $show(b ));$skip(15); 
 	b(0) = Empty;$skip(25); 
 	val s: NonEmpty = a(0);System.out.println("""s  : NonEmpty = """ + $show(s ))}
}

class IntSet {
}

object Empty extends IntSet {
}

class NonEmpty extends IntSet {
}