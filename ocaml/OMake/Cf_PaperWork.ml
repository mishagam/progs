(* Codeforces 250A PaperWork done *)

open String;;
open List;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
let spli s = Str.split (Str.regexp " ") s;;
let printlisti li = List.iter (fun i -> (print_string " "; print_int i)) li;;
let printarri ai = Array.iter (fun i -> (print_string " "; print_int i)) ai;;
let debug = false;;

let rec readlist n acc = match n with
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec nextpap l cnt pap = match l with
	| [] -> (l, List.rev pap)
	| h :: t ->
			if cnt = 2 && h < 0 then (l, List.rev pap)
			else
				let cnt1 = if h <0 then cnt +1 else cnt in
				nextpap t cnt1 (h :: pap);;

let rec topaps l paps = match l with
	| [] -> List.rev paps
	| _ ->
			let ll, pap = nextpap l 0 [] in
			topaps ll (pap :: paps);;

let rec prilist l = match l with
	| [] -> ()
	| h :: t -> begin
				print_int h;
				print_string " " ;
				prilist t
			end;;

let main () =
	let n = gr() in
	let l = readlist n [] in
	let paps = topaps l [] in
	begin
		print_int (length paps); print_newline();
		let papsl = map (fun x -> length x) paps in
		prilist papsl
	end;;

main();;
