(* Codeforces 287A - UnilShtan *)

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
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let aa = Array.make 4 "";;

let rec readaa i n =
	if i == n then ()
	else (
		aa.(i) <- rdln();
		readaa (i +1) n
	);;

let cntaa ii jj c =
	let cnt = ref 0 in (
		for i = ii to ii +1 do
			for j = jj to jj +1 do
				if aa.(i).[j] == c then
					cnt := !cnt + 1
			done
		done;
		!cnt
	);;

let rec ifiq () =
	let iqok = ref false in
	begin
		for ii = 0 to 2 do
			for jj = 0 to 2 do
				begin
					if (cntaa ii jj '#') >= 3 then iqok := true;
					if (cntaa ii jj '.') >= 3 then iqok := true
				end
			done
		done;
		!iqok
	end;;

let main() =
	begin
		readaa 0 4;
		print_string (if ifiq() then "YES" else "NO") 
	end;;

main();;
