
type 'a pq = Empty | Node of 'a * 'a pq * 'a pq * int;;

exception MisError of string;;

let rec size q = match q with
	| Empty -> 0
	| Node (_, _, _, n) -> n;;

let head = function
	| Empty -> raise (MisError "head of empty")
	| Node (h, _, _, _) -> h;;

let rec addpq q x = match q with
	| Empty -> Node (x, Empty, Empty, 1)
	| Node (h, lt, rt, n) ->
			if h < x
			then
				if size lt < size rt
				then Node (h, addpq lt x, rt, n +1)
				else Node (h, lt, addpq rt x, n +1)
			else
			if size lt < size rt
			then Node (x, addpq lt h, rt, n +1)
			else Node (x, lt, addpq rt h, n +1);;

let rec remhd q = match q with
	| Empty -> raise (MisError "remhd of empty")
	| Node (h, lt, rt, n) ->
			match (lt, rt) with
			| (Empty, Empty) -> (h, Empty)
			| (Empty, rt) ->	let (hh, rto) = remhd rt in
					(h, Node (hh, Empty, rto, n -1))
			| (lt, Empty) -> let (hh, lto) = remhd lt in
					(h, Node (hh, lto, Empty, n -1))
			| _ when (head lt) < (head rt) -> let (hh, lto) = remhd lt in
					(h, Node (hh, lto, rt, n -1))
			| _ -> let (hh, rto) = remhd rt in
					(h, Node (hh, lt, rto, n -1));;

let rec pripq prival = function
	| Empty -> print_string ";"
	| Node (h, lt, rt, n) ->
			(
				print_string "  Node_"; prival h;
				print_string "_"; print_int n;
				print_string "\nlt:";
				pripq prival lt;
				print_string "\nrt:";
				pripq prival rt
			);;