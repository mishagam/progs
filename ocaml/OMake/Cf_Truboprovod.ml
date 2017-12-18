(* Codeforces 287B - Truboprovod DONE *)

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

let two = (Int64.succ Int64.one);;

let cntrazv m k =
	let km = Int64.mul k m in
	let summ = (Int64.div (Int64.mul m (Int64.add m Int64.one)) two) in
	let res = Int64.add Int64.one (Int64.sub km summ) in
	(
		(* Printf.printf "cntrazv m,k,res = %Ld %Ld %Ld\n" m k res; *)
		res);;

(* find best x a<=x<b such that cntr x k >= n *)
let rec findbest a b k n =
	if (Int64.sub b a) < Int64.one
	then a
	else
		let x = (Int64.div (Int64.add a b) two) in
		let cntx = cntrazv x k in
		if cntx > n then findbest a x k n
		else if cntx < n then findbest (Int64.succ x) b k n
		else x;;

let main() =
	let n = grl() in
	let k = grl () in
	let maxtrub = cntrazv (Int64.pred k) k in
	if maxtrub < n then print_string "-1"
	else if n <= Int64.one then print_string "0"
	else
		let best = findbest Int64.one k k n in
		print_string (Int64.to_string best);;

main();;
