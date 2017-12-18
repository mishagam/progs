(* Codeforces 490B Ochered doesn't work yet *)

open List;;
open String;;
open Array;;
open Int64;;
open Printf;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
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

let rec readpairlist n acc = match n with
	| 0 -> acc
	| _ -> readpairlist (n - 1) (readpair() :: acc);;

let compa p1 p2 =
	let (a1, b1) = p1 in
	let (a2, b2) = p2 in
	a1 - a2;;

let compb p1 p2 =
	let (a1, b1) = p1 in
	let (a2, b2) = p2 in
	b1 - b2;;

let rec finda aa mn mx ar =
	if mn >= mx then -1
	else
		let idx = (mx + mn) /2 in
		let (a, b) = ar.(idx) in
		(* let _ = Printf.printf "idx,a,b,mn,mx = %d %d %d %d %d\n" idx a b mn mx in *)
		if a == aa then b
		else if a > aa then finda aa mn idx ar
		else finda aa (idx +1) mx ar;;

let rec findb bb mn mx ar =
	if mn >= mx then -1
	else
		let idx = (mx + mn) /2 in
		let (a, b) = ar.(idx) in
		if b == bb then a
		else if b > bb then findb bb mn idx ar
		else findb bb (idx +1) mx ar;;

let rec evenseq ar a n acc =
	let b = finda a 0 n ar in
	if (b <= 0) then List.rev acc
	else evenseq ar b n (b :: acc);;

let rec oddseq ar b n acc =
	let a = findb b 0 n ar in
	if (a <= 0) then acc
	else oddseq ar a n (a :: acc);;

let pripairs ar = Array.iter (fun pr -> let (a, b) = pr in
					(print_string "( "; print_int a; print_string " - "; print_int b; print_string ")")) ar;;

let rec combine odds evens acc = match odds with
	| [] -> List.rev acc
	| hd :: tl -> combine evens tl (hd :: acc);;

let main () =
	let n = gr () in
	let prl = readpairlist n [] in
	let pra = Array.of_list prl in
	let _ = Array.sort compa pra in
	let eseq = evenseq pra 0 n [] in
	(* let _ = (print_string " eseq= "; printlisti eseq ) in *)
	let _ = Array.sort compb pra in
	let oseq = oddseq pra 0 n [] in
	(* let _ = (print_string " oseq= "; printlisti oseq; print_string "\n" ) in *)
	let sq = combine oseq eseq [] in
	printlisti sq;;

main();;
