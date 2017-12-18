(* Codeforces 266A Kamni - very easy, done, reads strings OK *)

open List;;
open String;;
open Array;;
open Int64;;
open Printf;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let grs () = Scanf.scanf " %s" (fun s -> s);;
(* let rdln() = input_line Pervasives.stdin;; *)
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let printarri64 ai = Array.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) ai;;
let readpair () =
	let a = gr() in
	let b = gr() in
	(a, b);;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n - 1) (gr() :: acc);;

let rec countsame i n s acc = 
	if i==(n-1) then acc
	else
		let nacc = (if s.[i]==s.[i+1] then acc+1 else acc) in
		countsame (i+1) n s nacc;;	

let main () =
	let n = gr () in
	let s = grs() in
	let ns = countsame 0 n s 0 in
	(print_int ns; print_newline());;

main();;
