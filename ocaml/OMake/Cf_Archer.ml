(* Codeforces contest 312B - Archer - DOne *)

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
let rec readpairs n acc = match n with
	| 0 -> List.rev acc
	| _ -> readpairs
				(n -1)
				(
					let a = gr() in
					let b = gr() in
					(* let _ = Printf.printf "a,b = %d %d\n" a b in *)
					(a, b) :: acc
				);;
let debug = false;;

let a = gr();;  (* number of test data *)
let b = gr();;  (* number of test data *)
let c = gr();;  (* number of test data *)
let d = gr();;  (* number of test data *)

let main() =
    let af = float_of_int a in
    let bf = float_of_int b in
    let cf = float_of_int c in
    let df = float_of_int d in
    
	let adf = af *. df in
	let acaf = (af *. df) +. (cf *. bf) -. (af *. cf) in
	let pp = adf /. acaf in
	Printf.printf "%18.12f" pp;;	

main();;
