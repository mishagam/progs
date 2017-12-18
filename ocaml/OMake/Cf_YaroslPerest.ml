(* Codeforces 296A - Yaroslav perest *)

open Filename;;

(* you can use either gr or rdln but not both *)
let use_input_txt = false;;
let fn = (Filename.dirname Filename.current_dir_name);;
let filename = Filename.concat "." "input.txt";;
let cin = if use_input_txt then Scanf.Scanning.open_in filename
	else Scanf.Scanning.stdin;;

let cout = open_out "output.txt";;
let gr () = Scanf.bscanf cin " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printlisti64 li = List.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let rec readlist n acc = match n with | 0 -> List.rev acc | _ -> readlist (n -1) (gr() :: acc);;
let debug = false;;

let n = gr();;  (* size of permutation *)

let rec cntmax li last curs mx = match li with
	| [] -> (max curs mx)
	| hd :: tl ->
			if hd = last
			then cntmax tl last (curs +1) mx
			else cntmax tl hd 1 (max curs mx);;

let canraz m n = 
	if n = 1 then true
	else if (n mod 2 = 0) && (m > n / 2) then false
	else if (2 * m - 1 > n) then false
	else true;;

let main() =
	let li = readlist n [] in
	let sli = List.sort compare li in
	let maxi = cntmax sli 0 0 0 in
	(
		(* print_string "maxi n = ";
		print_int maxi;
		print_string " "; print_int n; *)
	print_string (if (canraz maxi n) then "YES" else "NO")
	);;	
	
	main();;
