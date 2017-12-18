(* Codeforces 257B SlonMagSquare *)

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

let mg = Array.make_matrix 3 3 0;;

let readmat () =
	begin
		for i = 0 to 2 do
			for j = 0 to 2 do
				mg.(i).(j) <- gr()
			done
		done
	end;;

let solve() =
	let cma = (mg.(0).(1) + mg.(0).(2) - mg.(2).(0) - mg.(2).(1)) in
	let bma = mg.(0).(1) + mg.(0).(2) - mg.(1).(0) - mg.(1).(2) in
	let cpa = mg.(2).(0) + mg.(0).(2) in
	let c = (cpa + cma) / 2 in
	let a = (cpa - cma) / 2 in
	let b = a + bma in
	begin
		mg.(0).(0) <- a;
		mg.(1).(1) <- b;
		mg.(2).(2) <- c;
	end;;

let printmat () =
	for i = 0 to 2 do
		begin
			for j = 0 to 2 do
				begin
					print_int mg.(i).(j);
					print_string " "
				end
			done;
			print_newline ()
		end
	done;;

let main () =
	begin
		readmat ();
		solve();
		printmat()		
	end;;

main();;
