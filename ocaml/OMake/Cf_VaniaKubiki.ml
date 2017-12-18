(* Codeforces 492A VaniaKubiki done *)

open String;;
open Array;;
open Int64;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let printarri64 ai = Array.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) ai;;

let rec maxcube i n triangl piram =
	let ii = i+1 in
	let tri = triangl+ii in
	let pir = piram + tri in
	if pir > n then print_int i
	else begin
		(* print_int ii; print_string " ";
		print_int tri;  print_string " ";
		print_int pir;  print_newline (); *)
		maxcube ii n tri pir
		end;;

let main () = begin
	let n = gr () in
	maxcube 1 n 1 1
	end;;

main();;
