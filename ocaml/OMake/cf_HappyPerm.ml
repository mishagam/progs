(* Codeforces 287C - HappyPermutations DONE*)

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

let n = gr();;  (* size of permutation *)

let p = Array.make n 1;;

let pp i n =
	let n2 = n /2 in
	if (i == n2 +1) && (n mod 4 == 1) then i
	else if i <= n2	then
		(if (i mod 2) == 1
			then i + 1
			else n - i + 2)
	else
		(if ((n-i) mod 2) == 1
			then n - i
			else i - 1);;

let countp n =
	for i = 1 to n do
		p.(i -1) <- pp i n
	done;;

let main() =
	if ((n mod 4) == 2) or ((n mod 4) == 3)
	then print_string "-1"
	else
		begin
			countp n;
			printarri p
		end;;

main();;
