
type 'a pq = Empty | Node of 'a * 'a pq * 'a pq * int;;

val size: 'a pq -> int
val addpq: 'a pq -> 'a -> 'a pq
val pripq: ('a -> unit) -> 'a pq ->  unit
val remhd: 'a pq -> ('a * 'a pq)
