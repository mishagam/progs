(* Codeforces contest 292 A - SMS Center *)

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

let rec readpairs n acc = match n with 
  | 0 -> List.rev acc 
  | _ -> 
		let a = gr() in
		let b = gr() in
		readpairs (n -1) ((a,b) :: acc);;

let rec get_maxlen_maxt lprs maxl maxt = 
	match lprs with
	| [] -> (maxl, maxt)
	| hd :: tl ->
		let (t,n) = hd in
		let inq = max 0 (maxt - t) in
		let nmaxl = max maxl (inq + n) in
		let nmaxt = t + (inq + n) in
		get_maxlen_maxt tl nmaxl nmaxt;;


let main() =
	let prs = readpairs n [] in
	let (maxl, maxt) = get_maxlen_maxt prs 0 0 in
	(
		print_int maxt;
		print_string " ";
		print_int maxl
		);;
	
	main();;
