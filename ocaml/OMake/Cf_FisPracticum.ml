(* Codeforces 252B Fispracticum 253B *)

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
let debug = false;;

(* number of erasure for list to be <= 2*a *) 
let rec cnterase a l len = match l with 
| [] -> (0, [])
| h :: t when h > 2*a -> (len, l)
| h :: t -> cnterase a t (len-1);;

let rec cntopt l lb na opt = match l with
| [] -> opt
| h :: t ->
	let (ne, le) = cnterase h lb (List.length lb) in
	let newOpt = min opt (na + ne) in
	cntopt t le (na+1) newOpt;;

(* let l = [4;1;3;2] in              *)
(* let sc = (List.sort compare l) in *)
(* printlisti sc;;                   *)

let main () =
	let n = gr() in
	let c = readlist n [] in
	let sc = (List.sort compare c) in
	let mine = cntopt sc sc 0 99999 in
	print_int mine;;

main();;
