object ArrayNonEmptyWs {
 	val a: Array[NonEmpty] = Array(new NonEmpty)
 	val b: Array[IntSet] = a
 	b(0) = Empty
 	val s: NonEmpty = a(0)
}

class IntSet {
}

object Empty extends IntSet {
}

class NonEmpty extends IntSet {
}