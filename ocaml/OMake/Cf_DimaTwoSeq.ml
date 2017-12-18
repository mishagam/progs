(* Codeforces 272D - Dima two seq TODO *)

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
let debug = false;;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec to_pairs l i acc = match l with
| [] -> List.rev acc
| h :: t -> to_pairs t (i+1) ((h,i) :: acc);;

(* count occurecnces in sorted array *)
let rec getcounts l =
	match l with
	| [] -> []
	| hh :: tt ->
			let rec countshelp l last lcnt acc =
				match l with
				| [] -> lcnt :: acc
				| h :: t when h = last -> countshelp t last (lcnt +1) acc
				| h :: t -> countshelp t h 1 (lcnt :: acc) in
			countshelp tt hh 1 [];;

let mul64m l m =
	let rec mulh l acc =
		match l with
		| [] -> acc
		| h :: t -> mulh t (Int64.rem (Int64.mul h acc) m) in
	mulh l Int64.one;;

let main () =
	let n = gr() in
	let a = readlist n [] in
	let b = readlist n [] in
	let m = Int64.of_int (gr()) in
	let sab = List.sort compare (a @ b) in
	let cntsl = getcounts sab in
	let rec fact64m n =
		if n < 2 then Int64.one
		else (Int64.rem (Int64.mul (Int64.of_int n) (fact64m (n - 1))) m) in
	let factsl = List.map fact64m cntsl in
	let mull = mul64m factsl m in
	begin
		(* print_string "\nsab:"; printlisti sab;
		print_string "\ncntsl:"; printlisti cntsl;
		print_string "\nfactsl:"; printlisti64 factsl;
		print_string "\nmull"; *)
		print_string (Int64.to_string mull)
	end;;

main();;
