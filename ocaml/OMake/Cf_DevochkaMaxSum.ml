(* Codeforces 276C - Devochka max sum Done! *)

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

let rec read_pairs_list n acc = match n with
	| 0 -> List.rev acc
	| _ ->
			let x = gr()-1 in
			let y = gr()-1 in
			read_pairs_list (n -1) ((x, y) :: acc);;

let n = gr();;
let q = gr();;
let a = readlist n [];;
let lr = read_pairs_list q [];;
let ocua = Array.make n 0;;
let ocu1000 = Array.make ((n /1000) +1) 0;;

let rec count_ocu lp = match lp with
	| [] -> ()
	| (l, r) :: tl ->
			begin
				let lt = l /1000 in
				let rt = r /1000 in
				if lt < rt -1 then begin
					for i = lt +1 to rt -1 do
						ocu1000.(i) <- ocu1000.(i) + 1
					done;
					for i = l to (lt +1) *1000 -1 do
						ocua.(i) <- ocua.(i) + 1
					done;
					for i = rt *1000 to r do
						ocua.(i) <- ocua.(i) + 1
					done
				end else
					for i = l to r do
						ocua.(i) <- ocua.(i) + 1
					done;
				count_ocu tl
			end;;

let rec use_thousands n = match n with
	| 0 -> ()
	| _ ->
			let n1 = n -1 in (
				ocua.(n1) <- ocua.(n1) + ocu1000.(n1 /1000);
				use_thousands n1
			);;

let rec cntmul sa sb cnt =
	match sa, sb with
	| [], [] -> cnt
	| ha :: ta, hb :: tb ->
			let ncnt = (Int64.add cnt (Int64.mul (Int64.of_int ha) (Int64.of_int hb))) in
			cntmul ta tb ncnt
	| _ -> raise (Failure "Different lengths sa sb");;

let main() =
	begin
		count_ocu lr;
		use_thousands (n -1);
		let sb = List.sort compare (Array.to_list ocua) in
		let sa = List.sort compare a in
		let sum_mul = cntmul sa sb Int64.zero in
		print_string ((Int64.to_string sum_mul) ^ "\n")
	end;;

main();;
