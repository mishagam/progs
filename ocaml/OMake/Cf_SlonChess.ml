(* Codeforces 257A Slonik chess done *)

open Filename;;
open String;;

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
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let rec goodone s = 
	if s = "" then true
	else if (String.length s) = 1 then true
	else if s.[0] = s.[1] then false
	else goodone (String.sub s 1 ((String.length s) - 1));; 

let rec goodl ls = match ls with
| [] -> true
| h :: t -> (goodone h) && (goodl t);;

let rec readls n = match n with 
| 0 -> []
| _ -> rdln() :: readls (n-1);;

let main () =
	let ls = readls 8 in
	let good = goodl ls in
	let msg = if good then "YES" else "NO" in
	begin
		print_string msg;
		print_newline()
	end;;


main();;
