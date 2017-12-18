(* Codeforces contest 292 B - SMS Center *)

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

let n = gr();;  (* size network *)
let m = gr();;  (* number edges *)

let adj = Array.make (n +1) [];;

let rec readpairs n acc = match n with
	| 0 -> List.rev acc
	| _ ->
			let a = gr() in
			let b = gr() in
			readpairs (n -1) ((a, b) :: acc);;

let rec setadj lpr = match lpr with
	| [] -> ()
	| hd :: tl ->
			let (a, b) = hd in
			(
				adj.(a) <- b :: adj.(a);
				adj.(b) <- a :: adj.(b);
				setadj tl
			);;

let rec findone i acc =
	if i > n then acc
	else
		let ln = List.length adj.(i) in
		let nacc = if ln = 1 then (i :: acc) else acc in
		findone (i +1) nacc;;

let nextInSeq prev aa =
	match adj.(aa) with
	| a :: b :: [] ->
			if a = prev then b
			else if b = prev then a
			else raise (Failure "not connected to prev")
	| _ -> -1;;

let rec countLoop start prev cur cnt =
	let nxt = nextInSeq prev cur in
	if nxt = start then cnt
	else countLoop start cur nxt (cnt +1);;

let main() =
	let prs = readpairs m [] in
	let _ = setadj prs in
	let lone = findone 0 [] in
	let nones = List.length lone in
	if nones = 0 then
		(
			(* can be only loop *)
			let start = 1 in
			let a = (List.hd adj.(start)) in
			let nloop = countLoop start start a 0 in
			if nloop = n-2 then print_string "ring topology"
			else print_string "unknown topology"
		)
	else if nones = 2 then
		(
			(* checking bus config *)
			let a = List.hd lone in
			let b = List.hd (List.tl lone) in
			let anxt = (List.hd adj.(a)) in
			let nseq = countLoop b a anxt 0 in
			if nseq = n -3 then print_string "bus topology"
			else print_string "unknown topology"
		)
	else if nones = n -1 then
		(
			(* checking star *)
			let a = List.hd lone in
			let center = (List.hd adj.(a)) in
			let nstar = List.length adj.(center) in
			if nstar = n -1 then print_string "star topology"
			else print_string "unknown topology"
		)
	else
		print_string "unknown topology";;

main();;
