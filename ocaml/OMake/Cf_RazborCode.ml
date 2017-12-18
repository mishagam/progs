(* Codeforces 255B RazborCode done *)

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

let rec cntxy s idx cntx cnty =
	if idx >= (length s) then (cntx, cnty)
	else begin
		let c = s.[idx] in
		let id1 = idx +1 in
		if c = 'x' then
			cntxy s id1 (cntx + 1) cnty
		else cntxy s id1 cntx (cnty + 1)
	end;;

let rec reppri s n = match n with
	| 0 -> ()
	| _ -> begin
				print_string s;
				reppri s (n -1)
			end;;

let main () =
	let s = rdln() in
	let (cx, cy) = cntxy s 0 0 0 in
	begin
		(* print_string " cx,cy = "; print_int cx; print_string " "; print_int *)
		(* cy;                                                                 *)
		if cx < cy then reppri "y" (cy - cx) 
			else reppri "x" (cx - cy);
		print_newline()
	end;;

main();;
