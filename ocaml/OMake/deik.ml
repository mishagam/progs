
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;

let rec lstopq = function
	| [] -> Priq.Empty
	| h :: t ->
			let q = lstopq t in
			Priq.addpq q h;;

let rec pqtols pq = match pq with
| Priq.Empty -> []
| _ ->
	let (h, o) = Priq.remhd pq in
	(
		(* print_string "hd "; print_int h; *)
		h :: pqtols o
	);;

let main() =
	(
		let qq = lstopq [9;8;7;6;5;4;3;2;1] in
		Priq.pripq print_int qq;
		print_string "\n Now printing list of values:\n";
		let qq = lstopq [9;8;7;6;11;2;13;4;17;5;4;3;77; 2;88;1] in
		let ls = pqtols qq in
		printlisti ls
	);;

main();;