(* Codeforces 498B Music XXX *)

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

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n - 1) (gr() :: acc);;

let main () =
	let n = gr () in
	let t = gr () in
	let s = grs() in
	let ns = 34 in
	print_int ns;;