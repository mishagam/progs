(* working with streams on ocaml *)

type 'a stream = Nil | Cons of 'a * (unit -> 'a stream);;

let rec take sr n = match n with
	| 0 -> []
	| _ -> ( match sr with
				| Nil -> []
				| Cons (a , astr) -> a :: (take (astr ()) (n -1)));;

(* return stream which repeats each value in stream sr 2 times *)
let rec doubl (sr:int stream) : int stream = 
	match sr with
	| Nil -> Nil
	| Cons (a, astr) -> Cons (a, fun () -> Cons (a, fun() -> doubl (astr())));;

let rec combine (a: int stream) (b:int stream) : int stream = 
	match a,b with
	| Nil, _ -> b
	| _, Nil -> a
	| Cons (aa,astr), Cons (bb,bstr) -> 
		Cons (aa, fun () -> Cons (bb, fun() -> combine (astr()) (bstr())));;

let rec (ones : int stream) = Cons (1, fun () -> ones);;

let rec from (n:int) : int stream = Cons (n, fun () -> from (n+1));;
let naturals = from 0;;

let rec fromp2 (n:int) : int stream = Cons (n, fun () -> fromp2 (n+n));;
let power2 = fromp2 1;;

let rec (turnt : int stream) = Cons (1, fun () -> Cons (-1, fun() -> turnt));;

let lo = take ones 10;;
let ln = take naturals 12;;
let l2 = take power2 10;;
let l3 = take (doubl naturals) 11;;
let l4 = take (doubl power2) 11;;
let l5 = take (combine naturals power2) 13;;
let l6 = take turnt 15;;

print_newline();;
