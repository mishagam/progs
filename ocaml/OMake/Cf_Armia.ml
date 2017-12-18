(* Codeforces 38A done Armia *)

open Big_int;;
open List;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;

let rec readlist n acc = match n with
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec sumab a b l = 
	if a>1 then (sumab (a-1) (b-1) (List.tl l))
	else if b>1 then ((List.hd l) + (sumab 0 (b-1) (List.tl l)))
	else 0;;

let debug = false;;

let main () =
	let n = gr() in
	let d = readlist (n-1) [] in
	let a = gr() in
	let b = gr() in
	let sab = sumab a b d in
	begin
		(* printlisti d;                   *)
		(* print_string "\n now result\n"; *)
	  print_int sab
	end;;

main();;
