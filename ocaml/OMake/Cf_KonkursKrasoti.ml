(* Codeforces 246C KonkursKrasoti written *)

open String;;
open Hashtbl;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let rec readlist n acc = match n with
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let debug = false;;

let hsh = Hashtbl.create 1000;;

let rec fillHash a li sum k = match a with
	| [] -> ()
	| h :: t -> begin
				let lli = h :: li in
				let ssum = sum + h in
				if not (Hashtbl.mem hsh ssum) && ((Hashtbl.length hsh) < k) then
					(Hashtbl.add hsh ssum lli);
				fillHash t li sum k;
				fillHash t lli ssum k
			end;;

let prioneentry k (kk, v) = begin
		print_int (length v);
		print_string " ";
		printlisti v;
		print_string "\n"
	end;;

let main () =
	let n = gr() in
	let k = gr() in
	let a = readlist n [] in
	begin
		fillHash a [] 0 k;
		Hashtbl.iter prioneentry hsh
	end;;

main();;
