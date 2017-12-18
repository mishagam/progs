(* Codeforces contest 292 D - Sviaznost TODO *)

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
let sviaz = Array.make (n +1) 0;;

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

let rec remsublist ls a b acc =
	match ls with
	| [] -> List.rev acc
	| h :: t when a > 0 -> remsublist t (a -1) (b -1) (h :: acc)
	| h :: t when b > 0 -> remsublist t 0 (b -1) acc
	| h :: t -> remsublist t 0 0 (h :: acc);;

let initAdj lprs remA remB =
	(
		Array.fill adj 0 n [];
		let remainingPairs = remsublist lprs remA remB [] in
		setadj remainingPairs
	);;

let rec countSviaz () = 1
	;;


let rec doall lrem lprs = 
	match lrem with
	| [] -> ()
	| hd :: tl ->
		(
			let (remA, remB) = hd in 
			initAdj lprs remA remB;
			let nconn = countSviaz() in
			print_int nconn;
			print_string "\n"
			);;

let main() =
	let adjprs = readpairs m [] in
	let k = gr() in
	let lrem = readpairs k [] in
	(
		doall lrem adjprs
		);;

main();;
