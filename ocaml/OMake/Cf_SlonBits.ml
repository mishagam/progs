(* Codeforces 257B SlonMagSquare *)

open String;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let remove_first_zero s = 
	let ln = String.length s in
	if not (String.contains s "0") then String.sub s 1 (ln-1) 
	else 
		let idxz = String.index s "0" in
		let a = String.sub s 0 idxz in
		let b = String.sub s (idxz+1) (ln-idxz-1) in
		a ^ b;;

let main () =
	let s = rdln() in
	let os = remove_first_zero s in
	begin
		print_string os
		print_newline()
	end;;

main();;
