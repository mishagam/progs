(* CodeForces 246 A Done *)

(* open PriorityQueue;; *)

let rec print_list l = match l with
	| [] -> print_string ""
	| h :: tl -> begin
				print_int h;
				print_string " ";
				print_list tl
			end;;

let rec rev_list n =
	match n with
	| 0 -> []
	| _ -> n :: rev_list (n -1);;

let neud n =
	if n < 3 then [-1]
	else rev_list n;;

let main () =
	let gr () = Scanf.scanf " %d" (fun i -> i) in
	let n = gr () in
	let lns = neud n in
	print_list lns;;

main();;
