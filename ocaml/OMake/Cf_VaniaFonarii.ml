(* Codeforces 492B VaniaFonari done *)

open List;;
open String;;
open Array;;
open Int64;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let printarri64 ai = Array.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) ai;;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n - 1) (gr() :: acc);;

let miscomp a b = a - b;;

let rec maxdif dif l = match l with 
| a :: b :: tl -> 
	let d = b - a in
	let dd = if d>dif then d else dif in
	maxdif dd (b :: tl)								
| _ -> dif;;

let main () = 
	let n = gr () in
	let l = gr () in
	let aal : int list = readlist n [] in
	let aso : int list = List.sort miscomp (l :: aal) in
	let d0 = maxdif 0 (0 :: aso) in
	let f0 = ((float_of_int d0) /. 2.0) in 
	let d1 = float_of_int (List.nth aso 0) in
	let d2 = float_of_int (l - (List.nth aso (n-1))) in
	let d = max f0 (max d1 d2) in
	begin
	  print_float d
	end;;

main();;
