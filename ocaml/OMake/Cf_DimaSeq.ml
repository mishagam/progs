(* Codeforces 272B - Dima seq *)

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
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec countbits n = match n with
	| 0 -> 0
	| 1 -> 1
	| _ ->
			let (n2, o ) = (n / 2, n mod 2) in
			o + countbits n2;;

let rec setcounts l a =
	match l with
	| [] -> ()
	| h :: t ->
			begin
				a.(h) <- a.(h) + 1;
				setcounts t a
			end;;

let rec npairs n = 
	let nn1 = (Int64.mul (Int64.of_int n) (Int64 (n - 1))) in
	Int64.div nn1 (Int64.of_int 2);;

let rec sumArr64 a n = match n with
| -1 -> 0
| _ -> Int64.add a.(n) (sumArr64 a (n -1));; 

let main () =
	let na = gr() in
	let a = readlist na [] in
	let bta = List.map countbits in
	let btna = Array.make 33 0 in
	begin
		print_listi a;
		setcounts bta btna;
		let aa = Array.map npairs btna in
		let sum_pairs = sumArr64 aa 32 in		
		print_int sum_pairs
	end;;

main();;
