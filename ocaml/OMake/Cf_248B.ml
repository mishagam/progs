(* Codeforces 248B done *)

open Big_int;;
open List;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let sp = [2; 3; 5; 7];;

let cvo o p = (o * 10) mod p;;

(* remainders 10^n from dividing by 2 3 5 7 *)
let rec ostat n p o = match n with 
| 0 -> o
| _ -> ostat (n-1) p (cvo o p);; 

let checkonep o p k = ((o + k) mod p) = 0;;

let rec checklp lo lp k = match lo with 
| [] -> true
| h :: t -> (checkonep h (List.hd lp) k) && (checklp t (List.tl lp) k);;

let rec findfirst lo lp k = 
	if checklp lo lp k then k
	else findfirst lo lp (k+1);;
	
let rec pow10 n = match n with
| 0 -> Big_int.unit_big_int
| _ ->
	if n < 10 then Big_int.mult_int_big_int 10 (pow10 (n-1))
	else 
		let a = n/2 in
		let b = n - 2*a in
		let pa = pow10 a in
		let pb = pow10 b in
		Big_int.mult_big_int pa (Big_int.mult_big_int pa pb);;

let main () =
	let n = gr() in
	let lo = List.map (fun p -> ostat (n-1) p 1) sp in
	let k = findfirst lo sp 1 in
	if n < 3 then print_string "-1"
	else begin
		(* print_string "lo = ";                               *)
		(* printlisti lo;                                      *)
		(* print_string ("\nk = " ^ (string_of_int k) ^ "\n"); *)
		let pown = pow10 (n-1) in
		let ret = Big_int.add_int_big_int k pown in
		print_string (Big_int.string_of_big_int ret)
	end;;

main();;
